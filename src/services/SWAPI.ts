import axios from 'axios'
import { Films, People, SingleFilm, SinglePerson } from '../types'

const BASE_URL = 'https://swapi.thehiveresistance.com/ai'

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
export const getResources = async <T>(resource: string, page: number) => {
	return get<T>(`/${resource}/?page=${page}`)
}

/**
 * Get a single resource
 */

export const getResource = <T>(resource: string, id: string) => {
	return get<T>(`/${resource}/${id}`)
}

/**
 * Search among resources
 */
export const searchResource = <T>(resource: string, query: string, page: number) => {
	return get<T>(`/${resource}/?search=${query}&page=${page}`)
}
