import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as SWAPI from '../services/SWAPI.ts'
import { ListGroup } from 'react-bootstrap'
import { Film, Films } from '../types'
import ResourceListItem from '../components/ResourceListItem.tsx'

const FilmsPage = () => {
	const [films, setFilms] = useState<Films | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

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

					{/* kan säkert göra en eller flera komponenter av sidräkningen också */}
					<p className='mt-3'>Page {films.current_page}</p>
				</>
			)}
		</div>
	)
}

export default FilmsPage
