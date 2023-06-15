import { useState } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import { useParams } from 'react-router-dom'
import { SingleVehicle } from "../../types/Vehicles"
import OverviewLinks from '../../components/cards/OverviewLinks.tsx'
import OverviewFilmLinks from '../../components/cards/OverviewFilmLinks.tsx'


const VehiclePage = () => {
	const resourceName = 'vehicles'
	const [vehicle, setVehicle] = useState<SingleVehicle | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const { vehicleId } = useParams()


	const resetValues = () => {
		// reset states
		setLoading(true)
		setError(null)
	}

	// Get vehicle from the API
	const getVehicle = async (id: string) => {

		// reset states when APIrequest is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResource<SingleVehicle>(resourceName, id)

			// set vehicle-state to the recieved data
			setVehicle(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	useState(() => {
		if (!vehicleId) return
		getVehicle(vehicleId)
	})


	return (
		<div id='VehiclePage' className="ResourcesPage info-box">


			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			{vehicle !== null && (
				<>
					<div className="card card-bg">
						<div className="card-body">
							<h1 className="card-title">{vehicle.name}</h1>
							<h3 className="card-subtitle mb-2 text-muted h6">Model: {vehicle.model}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Vehicle Class: {vehicle.vehicle_class} hrs</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Manufacturer: {vehicle.manufacturer} earthdays</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Cost in credits: {vehicle.cost_in_credits}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Length: {vehicle.length} m</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Crew: {vehicle.crew}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Passengers: {vehicle.passengers}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Max atmosphering speed: {vehicle.max_atmosphering_speed} km/h</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Hyperdrive rating: {vehicle.hyperdrive_rating}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Consumables: {vehicle.consumables}</h3>

							{vehicle.films.length > 0 && (
								<OverviewFilmLinks
									resourceTitle={'Films'}
									resourceArray={vehicle.films}
								/>
							)}
							{vehicle.pilots.length > 0 && (
								<OverviewLinks
									resourceTitle={'Pilots'}
									endpoint={'people'}
									resourceArray={vehicle.pilots}
								/>
							)}

						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default VehiclePage
