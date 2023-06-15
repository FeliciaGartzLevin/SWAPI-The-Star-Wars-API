import { Alert } from 'react-bootstrap'
import BabyYoda from '../assets/img/baby-yoda.gif'

const Error = () => {
	return (
		<div id='Loading' className='d-flex flex-column'>
			<img
				src={BabyYoda}
				alt="Baby Yoda greets you"
				className='img-fluid'
			/>
			<Alert
				variant='success'
				className='flex-grow-1'
			>
				<strong>
					Loading...
				</strong>

			</Alert>
		</div>
	)
}

export default Error
