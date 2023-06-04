import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as SWAPI from '../services/SWAPI.ts'
import { ListGroup } from 'react-bootstrap'
import { Film, Films } from '../types'

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
		<div className="info-box">

			<h1>FilmsPage</h1>

			{films !== null && (
				<>
					<ListGroup>
						{films.data.map(film => (
							<ListGroup.Item
								action
								as={Link}
								key={film.id}
								to={`/films/${film.id}`}
							>
								{film.title}
							</ListGroup.Item>
						))}
					</ListGroup>

					<p className='mt-3'>Page {films.current_page}</p>
				</>
			)}
		</div>
	)
}

export default FilmsPage
