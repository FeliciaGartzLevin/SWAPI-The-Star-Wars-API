import React from 'react'
import { Alert } from 'react-bootstrap'
import StormtrooperNo from '../assets/img/stormtrooper-no.gif'

type IProps = {
	errorMsg: string | null

}

const Error: React.FC<IProps> = ({ errorMsg }) => {
	return (
		<>

			<img
				src={StormtrooperNo}
				alt="Stormtrooper says no"
				className='img-fluid'
			/>
			<Alert
				variant='danger'
			>
				<strong>Stormtrooper says no</strong>
				<p>
					Error Message: "{errorMsg}"
				</p>

			</Alert>
		</>
	)
}

export default Error
