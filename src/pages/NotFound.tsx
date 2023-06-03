import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<>
			<h1>Page not found</h1>

			<Link to="/">
				<Button variant="primary">🏠¨<i className="fa-sharp fa-solid fa-house"></i></Button>
			</Link>
		</>
	)
}

export default NotFound
