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
 * Kom ihåg att lägga till |Planets|People etc i
 * get<Films> när jag lägger till fler resources!!!
 *
 */


/**
 * Get all resources
 */
export const getResources = async (resource: string, page: number) => {
	return get<Films>(`/${resource}/?page=${page}`)
}

/**
 * Get a single resource
 */

export const getResource = (resource: string, id: string) => {
	return get<Film>(`/${resource}/${id}`)
}

/**
 * Search among resources
 */
export const searchResource = (resource: string, query: string, page: number) => {
	return get<Films>(`/${resource}/?search=${query}&page=${page}`)
}
