import { useState, useEffect } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import { Alert } from 'react-bootstrap'
import { Starships } from '../../types/Starships'
import PageNavigation from '../../components/PageNavigation.tsx'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import SearchForm from '../../components/SearchForm.tsx'
import { useSearchParams } from 'react-router-dom'
import ShowAllResourcesBtn from '../../components/ShowAllResourcesBtn.tsx'
import StarshipsCards from '../../components/cards/StarshipsCards.tsx'

const StarshipsPage = () => {
	// search params
	const [searchParams, setSearchParams] = useSearchParams()
	// get "query=" and "page=" from URL Search Params
	const query = searchParams.get("query") || ''
	const page = searchParams.get("page") || String(1)
	// variables and states
	const resourceName = 'starships'
	const [starships, setStarships] = useState<Starships | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	// callable function for reset
	const resetValues = () => {
		// reset states
		setStarships(null)
		setLoading(true)
		setError(null)
	}

	// Get starships from the API
	const getStarships = async (resourceName: string, page: string) => {
		// reset states when search is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResources<Starships>(resourceName, page)

			// set starship-state to the recieved data
			setStarships(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	const getQueryInput = (queryInput: string) => {
		// set input value as query in searchParams
		setSearchParams({ query: queryInput, page: String(1) })
	}

	// query the API for starship
	const queryStarships = async (queryInput: string, page: string) => {
		// reset states when search is initialized
		resetValues()

		try {
			const data = await SWAPI.searchResource<Starships>(resourceName, queryInput, page)
			setStarships(data)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)

		}
		setLoading(false)

	}

	const handleSeeAll = () => {
		// removes the query from searchParams and hence triggers the useEffect below
		setSearchParams({ query: '', page: String(1) })
	}

	// handle clicking next or prev page
	const pageSwitcher = (directionNumber: number) => {
		const pageNum = Number(page) + directionNumber
		setSearchParams({ query: query, page: String(pageNum) })
	}

	useEffect(() => {
		if (!query) {
			getStarships(resourceName, page)
			return
		}
		queryStarships(query, page)
	}, [query, page])

	return (
		<div id='StarshipsPage' className="ResourcesPage info-box">

			<h1>Starships</h1>

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

			{starships !== null && starships.data.length === 0 && (
				<Alert
					variant='warning'
				>
					No starships could be found.
				</Alert>
			)}

			{starships !== null && starships.data.length > 0 && (
				<>
					{query && (
						<p className='m-0 small'>Showing {starships.total} search result for "{query}"</p>

					)}

					<PageNavigation
						currentPage={Number(page)}
						maxPage={starships.last_page}
						pageSwitcher={pageSwitcher}
					/>

					<div className='row'>
						{starships.data.map(starship => (
							<StarshipsCards
								key={starship.id}
								resource={starship}
								endpoint={resourceName} />
						))}
					</div>

					<PageNavigation
						currentPage={Number(page)}
						maxPage={starships.last_page}
						pageSwitcher={pageSwitcher}
					/>
				</>
			)}
		</div>
	)
}

export default StarshipsPage
