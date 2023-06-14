import React from 'react'
import { Link } from 'react-router-dom'
import { Person } from '../../types'
import Button from 'react-bootstrap/Button'

interface IProps {
	resource: Person
	endpoint: string
}

const PeopleCards: React.FC<IProps> = ({ resource, endpoint }) => {
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 mb-3">
			<div className="card d-flex h-100 card-bg">
				<div className="card-body d-flex flex-column">
					<h2 className="card-title h5">{resource.name}</h2>
					<h3 className="card-subtitle mb-2 text-muted h6">Birth year: {resource.birth_year}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Eye color: {resource.eye_color}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Height: {resource.height} cm</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Mass: {resource.mass} kg</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Skin color: {resource.skin_color}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Homeworld: {resource.homeworld.name}</h3>
					<p className="card-text flex-fill">{resource.name} is in {resource.films_count} films, owns {resource.vehicles_count} vehicles and belongs to {resource.species_count} species.</p>
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
