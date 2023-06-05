import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
import { Film } from '../types'

interface IProps {
	resourceTitle: string
	resourceId: string
	endpoint: string
}

const ResourceListItem: React.FC<IProps> = ({ resourceTitle, resourceId, endpoint }) => {
	return (
		<ListGroup.Item
			action
			as={Link}
			to={`/${endpoint}/${resourceId}`}
		>
			{resourceTitle}
		</ListGroup.Item>
	)
}

export default ResourceListItem


/*
Något sånt här (2:a exemplet) när jag ska hämta resurserna och vill ha bild till höger:
https://getbootstrap.com/docs/5.0/components/list-group/#numbered

<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
	<div class="ms-2 me-auto">
	  <div class="fw-bold">Subheading</div>
	  Cras justo odio
	</div>
	<span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
	<div class="ms-2 me-auto">
	  <div class="fw-bold">Subheading</div>
	  Cras justo odio
	</div>
	<span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
	<div class="ms-2 me-auto">
	  <div class="fw-bold">Subheading</div>
	  Cras justo odio
	</div>
	<span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>


*/
