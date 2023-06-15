import { idTitleContent, Link } from 'index.d.ts'


/**
 * Planet types
 */
export interface Planet {
	id: number
	name: string
	rotation_period: number
	orbital_period: number
	diameter: number
	climate: string
	gravity: string
	terrain: string
	surface_water: number
	population: number
	created: string
	edited: string
	residents_count: number
	films_count: number
}
export interface Planets {
	current_page: number
	data: Planet[]
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

export interface SinglePlanet {
	id: number
	name: string
	rotation_period: number
	orbital_period: number
	diameter: number
	climate: string
	gravity: string
	terrain: string
	surface_water: number
	population: number
	created: string
	edited: string
	residents: [
		{
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
		}
	]
	films: idTitleContent[]
}
