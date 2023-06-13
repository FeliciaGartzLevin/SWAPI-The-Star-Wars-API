import { useState } from 'react'
import * as SWAPI from '../services/SWAPI.ts'
import Error from '../components/Error.tsx'
import Loading from '../components/Loading.tsx'
import { Link, useParams } from 'react-router-dom'
import { SingleFilm } from "../types"


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

							<hr />
							<h2 className="card-title h3">Characters</h2>
							{
								film.characters.map(character => (
									<Link
										key={character.id}
										to={`/people/${character.id}`}
										className="d-inline">
										<span>{character.name}, </span>
									</Link>
								))
							}

							<hr />
							<h2 className="card-title h3">Planets</h2>
							{
								film.planets.map(planet => (
									<Link
										key={planet.id}
										to={`/planets/${planet.id}`}
										className="d-inline">
										<span>{planet.name}, </span>
									</Link>
								))
							}

							<hr />
							<h2 className="card-title h3">Starships</h2>
							{
								film.starships.map(starship => (
									<Link
										key={starship.id}
										to={`/starships/${starship.id}`}
										className="d-inline">
										<span>{starship.name}, </span>
									</Link>
								))
							}

							<hr />
							<h2 className="card-title h3">Vehicles</h2>
							{
								film.vehicles.map(vehicle => (
									<Link
										key={vehicle.id}
										to={`/vehicles/${vehicle.id}`}
										className="d-inline">
										<span>{vehicle.name}, </span>
									</Link>
								))
							}

							<hr />
							<h2 className="card-title h3">Species</h2>
							{
								film.species.map(specie => (
									<Link
										key={specie.id}
										to={`/species/${specie.id}`}
										className="d-inline">
										<span>{specie.name}, </span>
									</Link>
								))
							}

						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default FilmPage
