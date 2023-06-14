/**
 * Various types
 */

interface Link {
	url: string | null,
	label: string,
	active: boolean
}

interface idNameContent {
	id: number,
	name: string
}
interface idTitleContent {
	id: number,
	title: string
}


/**
 * Film types
 */
export interface Film {
	id: number,
	title: string,
	episode_id: number,
	opening_crawl: string,
	director: string,
	producer: string,
	release_date: string,
	created: string,
	edited: string,
	characters_count: number,
	planets_count: number,
	starships_count: number,
	vehicles_count: number,
	species_count: number,
}

export interface Films {
	current_page: number,
	data: Film[]
	first_page_url: string
	from: number,
	last_page: number,
	last_page_url: string,
	links: Link[]
	next_page_url: string | null,
	path: string,
	per_page: number,
	prev_page_url: string | null,
	to: number,
	total: number,
}


export interface SingleFilm {
	id: number,
	title: string,
	episode_id: number,
	opening_crawl: string,
	director: string,
	producer: string,
	release_date: string,
	created: string,
	edited: string,
	characters: idNameContent[]
	planets: idNameContent[]
	starships: idNameContent[]
	vehicles: idNameContent[]
	species: idNameContent[]
}

/**
 * People types
 */
export interface Person {
	id: number,
	name: string,
	birth_year: string,
	eye_color: string,
	hair_color: string,
	height: number,
	mass: number,
	skin_color: string,
	created: string,
	edited: string,
	films_count: number,
	species_count: number,
	starships_count: number,
	vehicles_count: number,
	homeworld: idNameContent
}
export interface People {
	current_page: number,
	data: Person[]
	first_page_url: string
	from: number,
	last_page: number,
	last_page_url: string,
	links: Link[]
	next_page_url: string | null,
	path: string,
	per_page: number,
	prev_page_url: string | null,
	to: number,
	total: number,
}

export interface SinglePerson {
	id: number,
	name: string,
	birth_year: string,
	eye_color: string,
	hair_color: string,
	height: number,
	mass: number,
	skin_color: string,
	created: string,
	edited: string,
	homeworld: idNameContent
	films: idTitleContent[]
	species: idNameContent[]
	starships: idNameContent[]
	vehicles: idNameContent[]
}

/**
 * Planet types
 */
export interface Planet {
	id: number,
	name: string,
	rotation_period: number,
	orbital_period: number,
	diameter: number,
	climate: string,
	gravity: string,
	terrain: string,
	surface_water: number,
	population: number,
	created: string,
	edited: string,
	residents_count: number,
	films_count: number
}
export interface Planets {
	current_page: number,
	data: Planet[]
	first_page_url: string
	from: number,
	last_page: number,
	last_page_url: string,
	links: Link[]
	next_page_url: string | null,
	path: string,
	per_page: number,
	prev_page_url: string | null,
	to: number,
	total: number,
}

export interface SinglePlanet {
	id: number,
	name: string,
	rotation_period: number,
	orbital_period: number,
	diameter: number,
	climate: string,
	gravity: string,
	terrain: string,
	surface_water: number,
	population: number,
	created: string,
	edited: string,
	residents: [
		{
			id: number,
			name: string,
			birth_year: string,
			eye_color: string,
			hair_color: string,
			height: number,
			mass: number,
			skin_color: string,
			created: string,
			edited: string,
		}
	],
	films: idTitleContent[]
}

/**
 * Starship types
 */
export interface Starship {
	id: number,
	name: string,
	model: string,
	starship_class: string,
	manufacturer: string,
	cost_in_credits: number,
	length: number,
	crew: number,
	passengers: number,
	max_atmosphering_speed: number,
	hyperdrive_rating: number,
	MGLT: number,
	cargo_capacity: number,
	consumables: string,
	created: string,
	edited: string,
	pilots_count: number,
	films_count: number
}
export interface Starships {
	current_page: number,
	data: Starship[]
	first_page_url: string
	from: number,
	last_page: number,
	last_page_url: string,
	links: Link[]
	next_page_url: string | null,
	path: string,
	per_page: number,
	prev_page_url: string | null,
	to: number,
	total: number,
}

export interface SingleStarship {
	id: number,
	name: string
	model: string,
	starship_class: string,
	manufacturer: string,
	cost_in_credits: number,
	length: number,
	crew: number,
	passengers: number,
	max_atmosphering_speed: number,
	hyperdrive_rating: number,
	MGLT: number,
	cargo_capacity: number,
	consumables: string,
	created: string,
	edited: string,
	pilots: idNameContent[],
	films: idTitleContent[],
}
