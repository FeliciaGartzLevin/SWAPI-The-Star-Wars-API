import React from 'react'
import { Link } from 'react-router-dom'
import { Planet } from '../../types/Planets'
import Button from 'react-bootstrap/Button'

interface IProps {
	resource: Planet
	endpoint: string
}

const PeopleCards: React.FC<IProps> = ({ resource, endpoint }) => {
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 mb-3">
			<div className="card d-flex h-100 card-bg">
				<div className="card-body d-flex flex-column">
					<h2 className="card-title h5">{resource.name}</h2>
					<h3 className="card-subtitle mb-2 text-muted h6">Population: {resource.population} inh</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Rotation period: {resource.rotation_period} hrs</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Orbital period: {resource.orbital_period} earthdays</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Diameter: {resource.diameter} km</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Climate: {resource.climate}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Gravity: {resource.gravity}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Terrain: {resource.terrain}</h3>
					<p className="card-text flex-fill">{resource.name} is in {resource.films_count} films and {resource.residents_count} of its residents is starring in them.</p>
					<Link
						to={`/${endpoint}/${resource.id}`}
						className="card-link">
						<Button className='button card-button'>
							More...
						</Button>
					</Link>
				</div>
			</div>
		</div>

	)
}

export default PeopleCards
