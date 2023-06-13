import { useState } from 'react'
import * as SWAPI from '../services/SWAPI.ts'
import Error from '../components/Error.tsx'
import Loading from '../components/Loading.tsx'
import { useParams } from 'react-router-dom'
import IndividualFilmCard from '../components/IndividualFilmCard.tsx'
import { Film } from "../types"


const FilmPage = () => {
	const resourceName = 'films'
	const [film, setFilm] = useState<Film | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const { filmId } = useParams()


	const resetValues = () => {
		// reset states
		// setFilm(null)
		setLoading(true)
		setError(null)
	}

	// Get film from the API
	const getFilm = async (id: string) => {
		console.log('Getting film with id: ', id)


		// reset states when APIrequest is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResource(resourceName, id)

			// set film-state to the recieved data
			setFilm(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	useState(() => {
		if (!filmId) return console.log("film doesn't have id")
		getFilm(filmId)
	})


	return (
		<div id='FilmPage' className="ResourcesPage info-box">


			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			{film !== null && (
				<>
					<h1>{film.title}</h1>

				</>
			)}
		</div>
	)
}

export default FilmPage
