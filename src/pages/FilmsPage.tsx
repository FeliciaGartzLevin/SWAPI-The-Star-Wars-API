import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as SWAPI from '../services/SWAPI.ts'
import { ListGroup } from 'react-bootstrap'
import { Film, Films } from '../types'
import ResourceListItem from '../components/ResourceListItem.tsx'
import PageNavigation from '../components/PageNavigation.tsx'

const FilmsPage = () => {
	const [films, setFilms] = useState<Films | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState(1)

	// Get films from the API
	const getFilms = async () => {
		setLoading(true)
		setError(null)

		try {
			// call API
			const data = await SWAPI.getFilms()

			// set film-state to the recieved data
			setFilms(data)

		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	// fetch films when page is being visited
	useEffect(() => {
		getFilms()
	}, [])

	// handle clicking next or prev page
	const pageSwitcher = (directionNumber: number) => {
		setPage(prevValue => prevValue + directionNumber)
	}

	return (
		<div id='FilmsPage' className="ResourcesPage info-box">

			<h1>Films</h1>

			{films !== null && films.data.length > 0 && (
				<>
					<ListGroup> {/* d-lg-inline-block  */}
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
