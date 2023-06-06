import { Alert } from 'react-bootstrap'
import BabyYoda from '../assets/img/baby-yoda.gif'

const Error = () => {
	return (
		<>
			<img
				src={BabyYoda}
				alt="Baby Yoda greets you"
				className='img-fluid'
			/>
			<Alert
				variant='success'
			>
				<strong>
					Loading...
				</strong>

			</Alert>
		</>
	)
}

export default Error
