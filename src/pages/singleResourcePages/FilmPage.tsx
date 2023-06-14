import { useState } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import { Link, useParams } from 'react-router-dom'
import { SingleFilm } from "../../types/index"
import OverviewLinks from '../../components/cards/OverviewLinks.tsx'


const FilmPage = () => {
	const resourceName = 'films'
	const [film, setFilm] = useState<SingleFilm | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const { filmId } = useParams()


	const resetValues = () => {
		// reset states
		setLoading(true)
		setError(null)
	}

	// Get film from the API
	const getFilm = async (id: string) => {

		// reset states when APIrequest is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResource<SingleFilm>(resourceName, id)

			// set film-state to the recieved data
			setFilm(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	useState(() => {
		if (!filmId) return
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
					<div className="card card-bg">
						<div className="card-body">
							<h1 className="card-title">{film.title}</h1>
							<h3 className="card-subtitle mb-2 text-muted h6">Episode {film.episode_id}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Released: {film.release_date}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Director: {film.director}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Produced by: {film.producer}</h3>
							<hr />
							<h2 className="card-title h3">Plot</h2>
							<p className="card-text">{film.opening_crawl}</p>

							{film.characters.length > 0 && (
								<OverviewLinks
									resourceTitle={'Characters'}
									endpoint={'people'}
									resourceArray={film.characters}
								/>
							)}
							{film.starships.length > 0 && (
								<OverviewLinks
									resourceTitle={'Starships'}
									resourceArray={film.starships}
								/>
							)}
							{film.vehicles.length > 0 && (
								<OverviewLinks
									resourceTitle={'Vehicles'}
									resourceArray={film.vehicles}
								/>
							)}
							{film.species.length > 0 && (
								<OverviewLinks
									resourceTitle={'Species'}
									resourceArray={film.species}
								/>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default FilmPage
