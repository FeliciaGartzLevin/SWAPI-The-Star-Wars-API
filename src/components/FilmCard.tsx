import React from 'react'
import { Link } from 'react-router-dom'
import { Film } from '../types'
import Button from 'react-bootstrap/Button'

interface IProps {
	resource: Film
	endpoint: string
}

const FilmCard: React.FC<IProps> = ({ resource, endpoint }) => {
	const plot = resource.opening_crawl.slice(0, 200) + '...'

	return (

		<div className="col-lg-4 col-md-6 col-sm-12 mb-3">
			<div className="card d-flex h-100 card-bg">
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{resource.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">Episode {resource.episode_id}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Released: {resource.release_date}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Director: {resource.director}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Produced by: {resource.producer}</h6>
					<p className="card-text flex-fill">{plot}</p>
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

export default FilmCard
