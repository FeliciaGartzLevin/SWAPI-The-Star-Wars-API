import { idTitleContent, idNameContent, Link } from 'index.d.ts'


/**
 * Vehicle types
 */
export interface Vehicle {
	id: number
	name: string
	model: string
	vehicle_class: string
	manufacturer: string
	length: number
	cost_in_credits: number
	crew: number
	passengers: number
	max_atmosphering_speed: number
	cargo_capacity: number
	consumables: string
	created: string
	edited: string
	pilots_count: number
	films_count: number
}
export interface Vehicles {
	current_page: number
	data: Vehicle[]
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

export interface SingleVehicle {
	id: number
	name: string
	model: string
	vehicle_class: string
	manufacturer: string
	length: number
	cost_in_credits: number
	crew: number
	passengers: number
	max_atmosphering_speed: number
	hyperdrive_rating: number
	cargo_capacity: number
	consumables: string
	created: string
	edited: string
	pilots: idNameContent[]
	films: idTitleContent[]
}
