import React from 'react'
import { idNameContent } from '../../types'
import { Link } from 'react-router-dom'

type IProps = {
	resourceTitle: string
	endpoint?: string
	resourceArray: idNameContent[]
}

const OverviewLinks: React.FC<IProps> = ({ resourceTitle, resourceArray, endpoint }) => {
	return (
		<>
			<hr />
			<h2 className="card-title h3">{resourceTitle}</h2>
			{
				resourceArray.map((oneResource, index: number) => (
					<Link
						key={oneResource.id}
						to={`/${endpoint ? endpoint : resourceTitle}/${oneResource.id}`}
						className="d-inline">

						<span>{oneResource.name}</span>
						{index === resourceArray.length - 1 ? '' : ', '}
					</Link>
				))
			}
		</>
	)
}

export default OverviewLinks
