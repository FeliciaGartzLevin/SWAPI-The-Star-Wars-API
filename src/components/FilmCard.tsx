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
					<h2 className="card-title h5">{resource.title}</h2>
					<h3 className="card-subtitle mb-2 text-muted h6">Episode {resource.episode_id}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Released: {resource.release_date}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Director: {resource.director}</h3>
					<h3 className="card-subtitle mb-2 text-muted h6">Produced by: {resource.producer}</h3>
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
