import { useState } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import { useParams } from 'react-router-dom'
import { SinglePlanet } from "../../types/Planets"
import OverviewLinks from '../../components/cards/OverviewLinks.tsx'
import OverviewFilmLinks from '../../components/cards/OverviewFilmLinks.tsx'


const PlanetPage = () => {
	const resourceName = 'planets'
	const [planet, setPlanet] = useState<SinglePlanet | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const { planetId } = useParams()


	const resetValues = () => {
		// reset states
		setLoading(true)
		setError(null)
	}

	// Get planet from the API
	const getPlanet = async (id: string) => {

		// reset states when APIrequest is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResource<SinglePlanet>(resourceName, id)

			// set planet-state to the recieved data
			setPlanet(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	useState(() => {
		if (!planetId) return
		getPlanet(planetId)
	})


	return (
		<div id='PlanetPage' className="ResourcesPage info-box">


			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			{planet !== null && (
				<>
					<div className="card card-bg">
						<div className="card-body">
							<h1 className="card-title">{planet.name}</h1>
							<h3 className="card-subtitle mb-2 text-muted h6">Population: {planet.population} inh</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Rotation period: {planet.rotation_period} hrs</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Orbital period: {planet.orbital_period} earthdays</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Diameter: {planet.diameter} km</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Climate: {planet.climate}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Gravity: {planet.gravity}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Terrain: {planet.terrain}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Surface water: {planet.surface_water}%</h3>
							{/* <p className="card-text flex-fill">extra info</p> */}
							{planet.films.length > 0 && (
								<OverviewFilmLinks
									resourceTitle={'Films'}
									resourceArray={planet.films}

								/>
							)}
							{planet.residents.length > 0 && (
								<OverviewLinks
									resourceTitle={'Residents'}
									endpoint={'people'}
									resourceArray={planet.residents}
								/>
							)}

						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default PlanetPage
