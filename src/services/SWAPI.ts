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

export const getFilm = (id: string) => {
	return get<Film>(`/films/${id}`)
}

// generalisera här och skicka in `resources` ist för `films`?
// eller går kanske inte med typescript. eller då får jag skapa en type
// som antingen tar emot Films ELLER People ELLER Planets etc.
// men då blir det störigt med att få förslag sen, det kommer väl inte funka då?

/**
 * Search among films
 */
export const searchFilms = (query: string) => {
	return get<Films>(`/films/?search=${query}`)
}
