import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

type Props = {}

const ResourcesPage = (props: Props) => {
	return (
		<>
			<div className="info-box mt-4">
				<h1>All resources</h1>

				<p>Click a resource to start searching it</p>

				{/* vid tid: stylea listgroup med annan bakgrundsfärg/bild och hover */}
				<ListGroup >
					<ListGroup.Item action as={Link} to="/films">Films</ListGroup.Item>
					<ListGroup.Item action as={Link} to="/people">Characters</ListGroup.Item>
					<ListGroup.Item action as={Link} to="/planets">Planets</ListGroup.Item>
					<ListGroup.Item action as={Link} to="/species">Species</ListGroup.Item>
					<ListGroup.Item action as={Link} to="/starships">Starships</ListGroup.Item>
					<ListGroup.Item action as={Link} to="/vehicles">Vehicles</ListGroup.Item>
				</ListGroup>



			</div >
		</>
	)
}

export default ResourcesPage
