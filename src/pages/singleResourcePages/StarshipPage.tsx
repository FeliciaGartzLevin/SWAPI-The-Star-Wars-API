import { useState } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import { useParams } from 'react-router-dom'
import { SingleStarship } from "../../types/Starships"
import OverviewLinks from '../../components/cards/OverviewLinks.tsx'
import OverviewFilmLinks from '../../components/cards/OverviewFilmLinks.tsx'


const StarshipPage = () => {
	const resourceName = 'starships'
	const [starship, setStarship] = useState<SingleStarship | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const { starshipId } = useParams()


	const resetValues = () => {
		// reset states
		setLoading(true)
		setError(null)
	}

	// Get starship from the API
	const getStarship = async (id: string) => {

		// reset states when APIrequest is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResource<SingleStarship>(resourceName, id)

			// set starship-state to the recieved data
			setStarship(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	useState(() => {
		if (!starshipId) return
		getStarship(starshipId)
	})


	return (
		<div id='StarshipPage' className="ResourcesPage info-box">


			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			{starship !== null && (
				<>
					<div className="card card-bg">
						<div className="card-body">
							<h1 className="card-title">{starship.name}</h1>
							<h3 className="card-subtitle mb-2 text-muted h6">Model: {starship.model}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Starship Class: {starship.starship_class} hrs</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Manufacturer: {starship.manufacturer} earthdays</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Cost in credits: {starship.cost_in_credits}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Length: {starship.length} m</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Crew: {starship.crew}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Passengers: {starship.passengers}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Max atmosphering speed: {starship.max_atmosphering_speed} km/h</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Hyperdrive rating: {starship.hyperdrive_rating}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">MGLT: {starship.MGLT}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Consumables: {starship.consumables}</h3>

							{starship.films.length > 0 && (
								<OverviewFilmLinks
									resourceTitle={'Films'}
									resourceArray={starship.films}
								/>
							)}
							{starship.pilots.length > 0 && (
								<OverviewLinks
									resourceTitle={'Pilots'}
									endpoint={'people'}
									resourceArray={starship.pilots}
								/>
							)}

						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default StarshipPage
