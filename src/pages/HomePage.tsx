import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function HomePage() {
	return (
		<div id='HomePage'>
			<h1 className="info-box">Welcome to The Star Wars API</h1>

			<Link to={"/resources"}>
				<Button className='info-box button'>
					Search
				</Button>
			</Link>
		</div>
	)
}

export default HomePage
