import { useState, useEffect } from 'react'
import * as SWAPI from '../services/SWAPI.ts'
import { Alert, Button, ListGroup } from 'react-bootstrap'
import { Films } from '../types'
import ResourceListItem from '../components/ResourceListItem.tsx'
import PageNavigation from '../components/PageNavigation.tsx'
import Error from '../components/Error.tsx'
import Loading from '../components/Loading.tsx'
import SearchForm from '../components/SearchForm.tsx'
import { useSearchParams } from 'react-router-dom'
import ShowAllResourcesBtn from '../components/ShowAllResourcesBtn.tsx'

const FilmsPage = () => {
	const [resourceName, setResourceName] = useState('films')
	const [films, setFilms] = useState<Films | null>(null)
	const [totalFilms, setTotalFilms] = useState<number | null>(null)
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
		setSearchParams()
	}

	// Get films from the API
	const getFilms = async (resourceName: string, page: number) => {
		// reset states when search is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResources(resourceName, page)

			// set film-state to the recieved data
			setFilms(res)
			setTotalFilms(res.data.length)


		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	// query the API for film
	const queryFilms = async (queryInput: string) => {
		// reset states when search is initialized
		resetValues()

		// set input value as query in searchParams
		setSearchParams({ query: queryInput })

		try {
			const data = await SWAPI.searchResource(resourceName, queryInput, page)
			setFilms(data)

		} catch (error: any) {
			setError(error.message)

		}
		setLoading(false)

	}

	// fetch films when page is being visited
	useEffect(() => {
		getFilms(resourceName, page)
	}, [])

	/* 	useEffect(() => {
			if (!query) return
	
			queryFilms(query, page)
		}, [query]) */

	// handle clicking next or prev page
	const pageSwitcher = (directionNumber: number) => {
		setPage(prevValue => prevValue + directionNumber)
	}

	return (
		<div id='FilmsPage' className="ResourcesPage info-box">

			<h1>Films</h1>

			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			<SearchForm
				onSubmit={queryFilms}
			/>

			{(films !== null
				&& totalFilms !== null
				&& films.data.length
				< totalFilms)
				&& (
					<ShowAllResourcesBtn
						resourceName={resourceName}
						page={page}
						seeAll={getFilms}
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
					<ListGroup>
						{films.data.map(film => (
							<ResourceListItem
								key={film.id}
								resourceTitle={film.title}
								resourceId={String(film.id)}
								endpoint='films' />
						))}
					</ListGroup>

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
