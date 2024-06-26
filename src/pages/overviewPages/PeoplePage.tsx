import { useState, useEffect } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import { Alert } from 'react-bootstrap'
import { People } from '../../types/People'
import PageNavigation from '../../components/PageNavigation.tsx'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import SearchForm from '../../components/SearchForm.tsx'
import { useSearchParams } from 'react-router-dom'
import ShowAllResourcesBtn from '../../components/ShowAllResourcesBtn.tsx'
import PeopleCards from '../../components/cards/PeopleCards.tsx'

const PeoplePage = () => {
	// search params
	const [searchParams, setSearchParams] = useSearchParams()
	// get "query=" and "page=" from URL Search Params
	const query = searchParams.get("query") || ''
	const page = searchParams.get("page") || String(1)
	// variables and state variables
	const resourceName = 'people'
	const [people, setPeople] = useState<People | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	// callable function for reset
	const resetValues = () => {
		// reset states
		setPeople(null)
		setLoading(true)
		setError(null)
	}

	// Get people from the API
	const getPeople = async (resourceName: string, page: string) => {
		// reset states when search is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResources<People>(resourceName, page)

			// set people-state to the recieved data
			setPeople(res)

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

	// query the API for person
	const queryPeople = async (queryInput: string, page: string) => {
		// reset states when search is initialized
		resetValues()

		try {

			const data = await SWAPI.searchResource<People>(resourceName, queryInput, page)
			setPeople(data)

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
			getPeople(resourceName, page)
			return
		}
		queryPeople(query, page)
	}, [query, page])

	return (
		<div id='PeoplePage' className="ResourcesPage info-box">

			<h1>People</h1>

			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			{!error && (
				<div className="d-flex justify-content-center">
					<SearchForm
						onSubmit={getQueryInput}
					/>
				</div>
			)}

			{query && <ShowAllResourcesBtn
				seeAll={handleSeeAll}
			/>}

			{people !== null && people.data.length === 0 && (
				<Alert
					variant='warning'
				>
					No people could be found.
				</Alert>
			)}

			{people !== null && people.data.length > 0 && (
				<>
					{query && (
						<p className='m-0 small'>Showing {people.total} search result for "{query}"</p>

					)}

					<PageNavigation
						currentPage={Number(page)}
						maxPage={people.last_page}
						pageSwitcher={pageSwitcher}
					/>

					<div className='row'>
						{people.data.map(person => (
							<PeopleCards
								key={person.id}
								resource={person}
								endpoint={resourceName} />
						))}
					</div>

					<PageNavigation
						currentPage={Number(page)}
						maxPage={people.last_page}
						pageSwitcher={pageSwitcher}
					/>
				</>
			)}
		</div>
	)
}

export default PeoplePage
