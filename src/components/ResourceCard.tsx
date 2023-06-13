import React from 'react'
import { Link } from 'react-router-dom'
import { Film } from '../types'

interface IProps {
	resource: Film
	endpoint: string
}

const ResourceCard: React.FC<IProps> = ({ resource, endpoint }) => {
	const plot = resource.opening_crawl.slice(0, 200) + '...'

	return (
		// <Link
		// 	to={`/${endpoint}/${resource.id}`}
		// >
		<div className="col-lg-4 col-md-6 col-sm-12 mb-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{resource.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">Released: {resource.release_date}</h6>
					<h6 className="card-subtitle mb-2 text-muted">Director: {resource.director}</h6>
					<p className="card-text">{plot}</p>
					<Link
						to={`/${endpoint}/${resource.id}`}
						className="card-link">More...</Link>
				</div>
			</div>
		</div>
		// </Link>
	)
}

export default ResourceCard
