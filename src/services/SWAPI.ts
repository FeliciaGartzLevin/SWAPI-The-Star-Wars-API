import axios from 'axios'
import { Film, Films } from '../types'

const BASE_URL = 'https://swapi.thehiveresistance.com/api'

/**
 * Generic get request
 */
export const get = async <T>(endpoint: string) => {
	const res = await axios.get<T>(BASE_URL + endpoint)
	return res.data
}

/**
 * Get all films
 */
export const getFilms = async () => {
	return get<Films>('/films')
}

/**
 * Get a single film
 */

export const getFilm = (id: number) => {
	return get<Film>(`/films/${id}`)
}
