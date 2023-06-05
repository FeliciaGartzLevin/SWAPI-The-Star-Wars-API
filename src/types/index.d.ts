
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
}
