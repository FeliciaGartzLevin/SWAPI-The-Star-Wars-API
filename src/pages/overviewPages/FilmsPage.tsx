import { useState, useEffect } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import { Alert } from 'react-bootstrap'
import { Films } from '../../types/Films'
import PageNavigation from '../../components/PageNavigation.tsx'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import SearchForm from '../../components/SearchForm.tsx'
import { useSearchParams } from 'react-router-dom'
import ShowAllResourcesBtn from '../../components/ShowAllResourcesBtn.tsx'
import FilmsCards from '../../components/cards/FilmsCards.tsx'

const FilmsPage = () => {
	const resourceName = 'films'
	const [films, setFilms] = useState<Films | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState(1)
	// search params
	const [searchParams, setSearchParams] = useSearchParams()
	// get "query=" from URL Search Params
	const query = searchParams.get("query")

	const resetValues = () => {
		// reset states
		setFilms(null)
		setLoading(true)
		setError(null)
		setPage(1)
	}

	// Get films from the API
	const getFilms = async (resourceName: string, page: number) => {
		// reset states when search is initialized
		resetValues()
		setSearchParams({ page: String(page) })

		try {
			// call API
			const res = await SWAPI.getResources<Films>(resourceName, page)

			// set film-state to the recieved data
			setFilms(res)

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

	// query the API for film
	const queryFilms = async (queryInput: string, page: number) => {
		// reset states when search is initialized
		resetValues()

		try {
			const data = await SWAPI.searchResource<Films>(resourceName, queryInput, page)
			setFilms(data)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)

		}
		setLoading(false)

	}

	const handleSeeAll = () => {
		// removes the query from searchParams and hence triggers the useEffect below
		setSearchParams({ page: String(page) })
	}

	useEffect(() => {
		if (!query) {
			getFilms(resourceName, page)
			return
		}
		queryFilms(query, page)
	}, [query])

	// handle clicking next or prev page
	const pageSwitcher = (directionNumber: number) => {
		setPage(prevValue => prevValue + directionNumber)
	}

	return (
		<div id='FilmsPage' className="ResourcesPage info-box">

			<h1>Films</h1>

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

			{query && (
				<ShowAllResourcesBtn
					seeAll={handleSeeAll}
				/>
			)
			}

			{films !== null && films.data.length === 0 && (
				<Alert
					variant='warning'
				>
					No films could be found.
				</Alert>
			)}

			{films !== null && films.data.length > 0 && (
				<>
					{query && (
						<p className='m-0 small'>Showing {films.total} search result for "{query}"</p>
					)}

					<div className='row'>
						{films.data.map(film => (
							<FilmsCards
								key={film.id}
								resource={film}
								endpoint={resourceName} />
						))}
					</div>

					<PageNavigation
						currentPage={page}
						maxPage={films.last_page}
						pageSwitcher={pageSwitcher}
					/>
				</>
			)}
		</div>
	)
}

export default FilmsPage
