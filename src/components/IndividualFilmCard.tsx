import React from 'react'
import { Film } from '../types'

interface IProps {
	film: Film
}

const IndividualFilmCard: React.FC<IProps> = ({ film }) => {
	return (
		<div className="card d-flex h-100 card-bg">
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{film.title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">Episode {film.episode_id}</h6>
				<h6 className="card-subtitle mb-2 text-muted">Released: {film.release_date}</h6>
				<h6 className="card-subtitle mb-2 text-muted">Director: {film.director}</h6>
				<h6 className="card-subtitle mb-2 text-muted">Produced by: {film.producer}</h6>
				<p className="card-text flex-fill">{film.opening_crawl}</p>

			</div>
		</div>
	)
}

export default IndividualFilmCard
