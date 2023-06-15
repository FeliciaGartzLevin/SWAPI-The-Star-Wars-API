import { idTitleContent, idNameContent, Link } from 'index.d.ts'

/**
 * Starship types
 */
export interface Starship {
	id: number
	name: string
	model: string
	starship_class: string
	manufacturer: string
	cost_in_credits: number
	length: number
	crew: number
	passengers: number
	max_atmosphering_speed: number
	hyperdrive_rating: number
	MGLT: number
	cargo_capacity: number
	consumables: string
	created: string
	edited: string
	pilots_count: number
	films_count: number
}
export interface Starships {
	current_page: number
	data: Starship[]
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

export interface SingleStarship {
	id: number
	name: string
	model: string
	starship_class: string
	manufacturer: string
	cost_in_credits: number
	length: number
	crew: number
	passengers: number
	max_atmosphering_speed: number
	hyperdrive_rating: number
	MGLT: number
	cargo_capacity: number
	consumables: string
	created: string
	edited: string
	pilots: idNameContent[]
	films: idTitleContent[]
}
