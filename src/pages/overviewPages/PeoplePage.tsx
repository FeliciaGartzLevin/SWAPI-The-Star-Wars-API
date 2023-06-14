import { useState, useEffect } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import { Alert } from 'react-bootstrap'
import { People } from '../../types/index'
import PageNavigation from '../../components/PageNavigation.tsx'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import SearchForm from '../../components/SearchForm.tsx'
import { useSearchParams } from 'react-router-dom'
import ShowAllResourcesBtn from '../../components/ShowAllResourcesBtn.tsx'
import PersonCard from '../../components/PeopleCards.tsx'
import PeopleCards from '../../components/PeopleCards.tsx'

const PeoplePage = () => {
	const resourceName = 'people'
	const [people, setPeople] = useState<People | null>(null)
	const [totalPeople, setTotalPeople] = useState<number | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState(1)
	// search params
	const [searchParams, setSearchParams] = useSearchParams()
	// get "query=" from URL Search Params
	const query = searchParams.get("query")
	const pageNumber = Number(searchParams.get("page"))

	// console.log('searchParams is: ', searchParams)
	// console.log('pageNumber is: ', pageNumber)

	// callable function for reset
	const resetValues = () => {
		// reset states
		setPeople(null)
		setLoading(true)
		setError(null)
	}

	// Get people from the API
	const getPeople = async (resourceName: string, page = 1) => {
		// reset states when search is initialized
		resetValues()
		setSearchParams({ page: String(page) })

		try {
			// call API
			const res = await SWAPI.getResources<People>(resourceName, page)

			// set person-state to the recieved data
			setPeople(res)
			setTotalPeople(res.data.length)

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

	// query the API for person
	const queryPeople = async (queryInput: string, page = 1) => {
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
		setPage(1)
		setSearchParams({ page: String(page) })
	}

	useEffect(() => {
		// console.log("'page' is currently: ", page)
		if (!query) {
			getPeople(resourceName, page)
			return
		}
		queryPeople(query, page)
	}, [query, page])

	// handle clicking next or prev page
	const pageSwitcher = (directionNumber: number) => {
		setPage(prevValue => prevValue + directionNumber)
	}

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

			<div className="d-flex justify-content-center">
				<SearchForm
					onSubmit={getQueryInput}
				/>
			</div>

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
						currentPage={page}
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
						currentPage={page}
						maxPage={people.last_page}
						pageSwitcher={pageSwitcher}
					/>
				</>
			)}
		</div>
	)
}

export default PeoplePage
