import React from 'react'
import { Link } from 'react-router-dom'
import { idTitleContent } from '../../types'

type IProps = {
	resourceTitle: string
	resourceArray: idTitleContent[]
}

const OverviewLinks: React.FC<IProps> = ({ resourceTitle, resourceArray }) => {
	return (
		<>
			<hr />
			<h2 className="card-title h3">{resourceTitle}</h2>
			{
				resourceArray.map(oneResource => (
					<Link
						key={oneResource.id}
						to={`/${resourceTitle}/${oneResource.id}`}
						className="d-inline">
						<span>{oneResource.title}, </span>
					</Link>
				))
			}
		</>
	)
}

export default OverviewLinks
