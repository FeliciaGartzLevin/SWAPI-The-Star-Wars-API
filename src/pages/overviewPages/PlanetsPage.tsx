import { useState, useEffect } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import { Alert } from 'react-bootstrap'
import { Planets } from '../../types/Planets'
import PageNavigation from '../../components/PageNavigation.tsx'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import SearchForm from '../../components/SearchForm.tsx'
import { useSearchParams } from 'react-router-dom'
import ShowAllResourcesBtn from '../../components/ShowAllResourcesBtn.tsx'
import PlanetsCards from '../../components/cards/PlanetsCards.tsx'

const PlanetsPage = () => {
	// search params
	const [searchParams, setSearchParams] = useSearchParams()
	// get "query=" and "page=" from URL Search Params
	const query = searchParams.get("query")
	const pageNumber = Number(searchParams.get("page"))
	// variables and states
	const resourceName = 'planets'
	const [planets, setPlanets] = useState<Planets | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState(pageNumber === 0 ? 1 : pageNumber)

	// callable function for reset
	const resetValues = () => {
		// reset states
		setPlanets(null)
		setLoading(true)
		setError(null)
	}

	// Get planets from the API
	const getPlanets = async (resourceName: string, page = 1) => {
		// reset states when search is initialized
		resetValues()
		setSearchParams({ page: String(page) })

		try {
			// call API
			const res = await SWAPI.getResources<Planets>(resourceName, page)

			// set planet-state to the recieved data
			setPlanets(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	const getQueryInput = (queryInput: string) => {
		// set input value as query in searchParams
		setSearchParams({ query: queryInput, page: String(page) })
	}

	// query the API for planet
	const queryPlanets = async (queryInput: string, page = 1) => {
		// reset states when search is initialized
		resetValues()

		try {
			const data = await SWAPI.searchResource<Planets>(resourceName, queryInput, page)
			setPlanets(data)
			setSearchParams({ query: queryInput, page: String(page) })


			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)

		}
		setLoading(false)

	}

	const handleSeeAll = () => {
		// removes the query from searchParams and hence triggers the useEffect below
		setPage(1)
		setSearchParams({ page: String(page) })
	}

	// handle clicking next or prev page
	const pageSwitcher = (directionNumber: number) => {
		setPage(prevValue => prevValue + directionNumber)
	}

	useEffect(() => {
		if (!query) {
			getPlanets(resourceName, page)
			return
		}
		queryPlanets(query, page)
	}, [query, page])


	useEffect(() => {
		const pageNumber = Number(searchParams.get("page"))
		if (pageNumber === 0) {
			return
		}
		setPage(pageNumber)
	}, [pageNumber])

	return (
		<div id='PlanetsPage' className="ResourcesPage info-box">

			<h1>Planets</h1>

			{!error && (
				<div className="d-flex justify-content-center">
					<SearchForm
						onSubmit={getQueryInput}
					/>
				</div>
			)}

			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			{query && <ShowAllResourcesBtn
				seeAll={handleSeeAll}
			/>}

			{planets !== null && planets.data.length === 0 && (
				<Alert
					variant='warning'
				>
					No planets could be found.
				</Alert>
			)}

			{planets !== null && planets.data.length > 0 && (
				<>
					{query && (
						<p className='m-0 small'>Showing {planets.total} search result for "{query}"</p>

					)}

					<PageNavigation
						currentPage={page}
						maxPage={planets.last_page}
						pageSwitcher={pageSwitcher}
					/>

					<div className='row'>
						{planets.data.map(planet => (
							<PlanetsCards
								key={planet.id}
								resource={planet}
								endpoint={resourceName} />
						))}
					</div>

					<PageNavigation
						currentPage={page}
						maxPage={planets.last_page}
						pageSwitcher={pageSwitcher}
					/>
				</>
			)}
		</div>
	)
}

export default PlanetsPage
