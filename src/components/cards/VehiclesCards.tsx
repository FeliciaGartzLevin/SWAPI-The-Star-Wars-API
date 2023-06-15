import React from 'react'
import { Link } from 'react-router-dom'
import { Vehicle } from '../../types/Vehicles'
import Button from 'react-bootstrap/Button'

interface IProps {
	resource: Vehicle
	endpoint: string
}

const PeopleCards: React.FC<IProps> = ({ resource, endpoint }) => {
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 mb-3">
			<div className="card d-flex h-100 card-bg">
				<div className="card-body d-flex flex-column">
					<h2 className="card-title h5">{resource.name}</h2>
					<h3 className="card-subtitle mb-2 text-muted h6">Model: {resource.model}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Starship Class: {resource.vehicle_class}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Manufacturer: {resource.manufacturer}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Cost in credits: {resource.cost_in_credits}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Length: {resource.length} m</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Crew: {resource.crew}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Passengers: {resource.passengers}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Max atmosphering speed: {resource.max_atmosphering_speed} km/h</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Consumables: {resource.consumables}</h3>
					<p className="card-text flex-fill">{resource.name} has {resource.pilots_count} registered pilots and appears in {resource.films_count} films.</p>
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
