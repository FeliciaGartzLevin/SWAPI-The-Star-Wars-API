import React from 'react'
import { Button } from 'react-bootstrap'

interface IProps {
	resourceName: string
	page: number
	seeAll: (resourceName: string, page: number) => Promise<void>
}

const ShowAllResourcesBtn: React.FC<IProps> = ({ seeAll, resourceName, page }) => {
	return (
		<Button
			className='my-2'
			onClick={() => seeAll(resourceName, page)}
		>
			Show all
		</Button>
	)
}

export default ShowAllResourcesBtn
