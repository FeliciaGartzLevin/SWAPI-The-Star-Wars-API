import React from 'react'
import { SingleFilm } from '../types'

interface IProps {
	film: SingleFilm
}

const IndividualFilmCard: React.FC<IProps> = ({ film }) => {
	return (
		<div>{film.title}</div>
	)
}

export default IndividualFilmCard
