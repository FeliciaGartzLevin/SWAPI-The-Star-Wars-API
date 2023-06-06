import React from 'react'
import { Button } from 'react-bootstrap'

interface IProps {
	seeAll: () => Promise<void>
}

const ShowAllResourcesBtn: React.FC<IProps> = ({ seeAll }) => {
	return (
		<Button
			className='my-2'
			onClick={seeAll}
		>
			Show all
		</Button>
	)
}

export default ShowAllResourcesBtn
