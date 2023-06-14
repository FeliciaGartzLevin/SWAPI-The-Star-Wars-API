import { useState } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import { Link, useParams } from 'react-router-dom'
import { SingleSpecies } from "../../types/index"
import OverviewLinks from '../../components/cards/OverviewLinks.tsx'
import OverviewFilmLinks from '../../components/cards/OverviewFilmLinks.tsx'

const SpeciesPage = () => {
	const resourceName = 'species'
	const [species, setSpecies] = useState<SingleSpecies | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const { speciesId } = useParams()


	const resetValues = () => {
		// reset states
		setLoading(true)
		setError(null)
	}

	// Get species from the API
	const getSpecies = async (id: string) => {

		// reset states when APIrequest is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResource<SingleSpecies>(resourceName, id)

			// set species-state to the recieved data
			setSpecies(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	useState(() => {
		if (!speciesId) return
		getSpecies(speciesId)
	})


	return (
		<div id='SpeciesPage' className="ResourcesPage info-box">


			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			{species !== null && (
				<>
					<div className="card card-bg">
						<div className="card-body">
							<h1 className="card-title">{species.name}</h1>
							<h3 className="card-subtitle mb-2 text-muted h6">Classification: {species.classification}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Designation: {species.designation}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Average height: {species.average_height} cm</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Average lifespan: {species.average_lifespan} years</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Eyecolors: {species.eye_colors}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Hair colors: {species.hair_colors}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Skin colors: {species.skin_colors}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Language: {species.language}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Homeworld: <Link to={`/planets/${species.homeworld.id}`}>{species.homeworld.name}</Link></h3>
							{species.people.length > 0 && (
								<OverviewLinks
									resourceTitle={'People'}
									resourceArray={species.people}
								/>
							)}
							{species.films.length > 0 && (
								<OverviewFilmLinks
									resourceTitle={'Films'}
									resourceArray={species.films}
								/>
							)}

						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default SpeciesPage
