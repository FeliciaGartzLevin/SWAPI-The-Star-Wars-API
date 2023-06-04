
interface ResourceContent {
	id: number,
	name: string,
}

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
	characters: ResourceContent[],
	planets: ResourceContent[],
	starships: ResourceContent[],
	vehicles: ResourceContent[],
	species: ResourceContent[],
}

export interface Films {
	current_page: number,
	data: Film[]
}
