import { idNameContent, idTitleContent, Link } from 'index.d.ts'

/**
 * People types
 */
export interface Person {
	id: number
	name: string
	birth_year: string
	eye_color: string
	hair_color: string
	height: number
	mass: number
	skin_color: string
	created: string
	edited: string
	films_count: number
	species_count: number
	starships_count: number
	vehicles_count: number
	homeworld: idNameContent
}
export interface People {
	current_page: number
	data: Person[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	links: Link[]
	next_page_url: string | null
	path: string
	per_page: number
	prev_page_url: string | null
	to: number
	total: number
}

export interface SinglePerson {
	id: number
	name: string
	birth_year: string
	eye_color: string
	hair_color: string
	height: number
	mass: number
	skin_color: string
	created: string
	edited: string
	homeworld: idNameContent
	films: idTitleContent[]
	species: idNameContent[]
	starships: idNameContent[]
	vehicles: idNameContent[]
}
