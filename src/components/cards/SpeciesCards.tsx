import React from 'react'
import { Link } from 'react-router-dom'
import { OneSpecies } from '../../types/Species'
import Button from 'react-bootstrap/Button'

interface IProps {
	resource: OneSpecies
	endpoint: string
}

const PeopleCards: React.FC<IProps> = ({ resource, endpoint }) => {
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 mb-3">
			<div className="card d-flex h-100 card-bg">
				<div className="card-body d-flex flex-column">
					<h2 className="card-title h5">{resource.name}</h2>
					<h3 className="card-subtitle mb-2 text-muted h6">Classification: {resource.classification}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Designation: {resource.designation}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Average height: {resource.average_height} cm</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Average lifespan: {resource.average_lifespan} years</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Eyecolors: {resource.eye_colors}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Hair colors: {resource.hair_colors}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Skin colors: {resource.skin_colors}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Language: {resource.language}</h3>
					<p className="card-text flex-fill">{resource.people_count} registered characters is of the {resource.name} species and they appear in {resource.films_count} films.</p>
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
