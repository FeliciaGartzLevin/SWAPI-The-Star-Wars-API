import { useState, useEffect } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import { Alert } from 'react-bootstrap'
import { AllSpecies } from '../../types/Species'
import PageNavigation from '../../components/PageNavigation.tsx'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import SearchForm from '../../components/SearchForm.tsx'
import { useSearchParams } from 'react-router-dom'
import ShowAllResourcesBtn from '../../components/ShowAllResourcesBtn.tsx'
import SpeciesCards from '../../components/cards/SpeciesCards.tsx'

const SpeciesPage = () => {
	// search params
	const [searchParams, setSearchParams] = useSearchParams()
	// get "query=" and "page=" from URL Search Params
	const query = searchParams.get("query")
	const pageNumber = Number(searchParams.get("page"))
	// variables and states
	const resourceName = 'species'
	const [species, setSpecies] = useState<AllSpecies | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState(pageNumber === 0 ? 1 : pageNumber)

	// callable function for reset
	const resetValues = () => {
		// reset states
		setSpecies(null)
		setLoading(true)
		setError(null)
	}

	// Get species from the API
	const getSpecies = async (resourceName: string, page = 1) => {
		// reset states when search is initialized
		resetValues()
		setSearchParams({ page: String(page) })

		try {
			// call API
			const res = await SWAPI.getResources<AllSpecies>(resourceName, page)

			// set vehicle-state to the recieved data
			setSpecies(res)

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

	// query the API for vehicle
	const querySpecies = async (queryInput: string, page = 1) => {
		// reset states when search is initialized
		resetValues()

		try {
			const data = await SWAPI.searchResource<AllSpecies>(resourceName, queryInput, page)
			setSpecies(data)
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

	useEffect(() => {
		if (!query) {
			getSpecies(resourceName, page)
			return
		}
		querySpecies(query, page)
	}, [query, page])

	// handle clicking next or prev page
	const pageSwitcher = (directionNumber: number) => {
		setPage(prevValue => prevValue + directionNumber)
	}

	return (
		<div id='SpeciesPage' className="ResourcesPage info-box">

			<h1>Species</h1>

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

			{species !== null && species.data.length === 0 && (
				<Alert
					variant='warning'
				>
					No species could be found.
				</Alert>
			)}

			{species !== null && species.data.length > 0 && (
				<>
					{query && (
						<p className='m-0 small'>Showing {species.total} search result for "{query}"</p>

					)}

					<PageNavigation
						currentPage={page}
						maxPage={species.last_page}
						pageSwitcher={pageSwitcher}
					/>

					<div className='row'>
						{species.data.map(vehicle => (
							<SpeciesCards
								key={vehicle.id}
								resource={vehicle}
								endpoint={resourceName} />
						))}
					</div>

					<PageNavigation
						currentPage={page}
						maxPage={species.last_page}
						pageSwitcher={pageSwitcher}
					/>
				</>
			)}
		</div>
	)
}

export default SpeciesPage
