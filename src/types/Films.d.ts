import { idNameContent, Link } from 'index.d.ts'

/**
 * Film types
 */
export interface Film {
	id: number
	title: string
	episode_id: number
	opening_crawl: string
	director: string
	producer: string
	release_date: string
	created: string
	edited: string
	characters_count: number
	planets_count: number
	starships_count: number
	vehicles_count: number
	species_count: number
}

export interface Films {
	current_page: number
	data: Film[]
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


export interface SingleFilm {
	id: number
	title: string
	episode_id: number
	opening_crawl: string
	director: string
	producer: string
	release_date: string
	created: string
	edited: string
	characters: idNameContent[]
	planets: idNameContent[]
	starships: idNameContent[]
	vehicles: idNameContent[]
	species: idNameContent[]
}
