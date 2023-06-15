import { idTitleContent, idNameContent, Link } from 'index.d.ts'


/**
 * Species types
 */
export interface OneSpecies {
	id: number
	name: string
	classification: string
	designation: string
	average_height: number
	average_lifespan: number
	eye_colors: string
	hair_colors: string
	skin_colors: string
	language: string
	created: string
	edited: string
	people_count: number
	films_count: number
	homeworld: idNameContent
}
export interface AllSpecies {
	current_page: number
	data: OneSpecies[]
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

export interface SingleSpecies {
	id: number
	name: string
	classification: string
	designation: string
	average_height: number
	average_lifespan: number
	eye_colors: string
	hair_colors: string
	skin_colors: string
	language: string
	created: string
	edited: string
	people: idNameContent[]
	homeworld: idNameContent
	films: idTitleContent[]
}
