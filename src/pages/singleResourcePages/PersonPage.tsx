import { useState } from 'react'
import * as SWAPI from '../../services/SWAPI.ts'
import Error from '../../components/Error.tsx'
import Loading from '../../components/Loading.tsx'
import { Link, useParams } from 'react-router-dom'
import { SinglePerson } from "../../types/index"
import OverviewLinks from '../../components/cards/OverviewLinks.tsx'
import OverviewFilmLinks from '../../components/cards/OverviewFilmLinks.tsx'


const PersonPage = () => {
	const resourceName = 'people'
	const [person, setPerson] = useState<SinglePerson | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const { personId } = useParams()


	const resetValues = () => {
		// reset states
		setLoading(true)
		setError(null)
	}

	// Get person from the API
	const getPerson = async (id: string) => {

		// reset states when APIrequest is initialized
		resetValues()

		try {
			// call API
			const res = await SWAPI.getResource<SinglePerson>(resourceName, id)

			// set person-state to the recieved data
			setPerson(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		}

		setLoading(false)
	}

	useState(() => {
		if (!personId) return
		getPerson(personId)
	})


	return (
		<div id='PersonPage' className="ResourcesPage info-box">


			{error &&
				<Error
					errorMsg={error}
				/>
			}

			{loading &&
				<Loading
				/>
			}

			{person !== null && (
				<>
					<div className="card card-bg">
						<div className="card-body">
							<h1 className="card-title">{person.name}</h1>
							<h3 className="card-subtitle mb-2 text-muted h6">Birth year: {person.birth_year}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Eye color: {person.eye_color}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Height: {person.height} cm</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Mass: {person.mass} kg</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Skin color: {person.skin_color}</h3>
							<h3 className="card-subtitle mb-2 text-muted h6">Homeworld: <Link to={`/planets/${person.homeworld.id}`}>{person.homeworld.name}</Link></h3>
							{person.films.length > 0 && (
								<OverviewFilmLinks
									resourceTitle={'Films'}
									resourceArray={person.films}
								/>
							)}
							{person.starships.length > 0 && (
								<OverviewLinks
									resourceTitle={'Starships'}
									resourceArray={person.starships}
								/>
							)}
							{person.vehicles.length > 0 && (
								<OverviewLinks
									resourceTitle={'Vehicles'}
									resourceArray={person.vehicles}
								/>
							)}
							{person.species.length > 0 && (
								<OverviewLinks
									resourceTitle={'Species'}
									resourceArray={person.species}
								/>
							)}

						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default PersonPage
