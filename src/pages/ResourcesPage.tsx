import React from 'react'

type Props = {}

const ResourcesPage = (props: Props) => {
	return (
		<>
			<div className="info-box mt-4">
				<h1>Resources</h1>

				<p>Insert clickable list of all resources here:
					"films, people, planets, species, starships, vehicles"
				</p>

				<p>Click a resource to start searching it</p>

			</div>
		</>
	)
}

export default ResourcesPage
