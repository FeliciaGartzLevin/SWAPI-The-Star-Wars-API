import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../src/assets/img/favicon.ico'

const Navigation = () => {

	const [expanded, setExpanded] = useState(false);

	const handleNavItemClick = () => {
		setExpanded(false);
	};

	return (
		<Navbar id='Navbar' variant="dark" expand="md" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src={Logo} alt="SWAPI-logo of death star" />
					<span className='logo-text'>SWAPI</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" >
					<Nav className="ms-auto" onClick={handleNavItemClick} >
						<Nav.Link as={NavLink} end to="/resources">All resources</Nav.Link>
						<Nav.Link as={NavLink} end to="/films">Films</Nav.Link>
						<Nav.Link as={NavLink} end to="/people">Characters</Nav.Link>
						<Nav.Link as={NavLink} end to="/planets">Planets</Nav.Link>
						<Nav.Link as={NavLink} end to="/species">Species</Nav.Link>
						<Nav.Link as={NavLink} end to="/starships">Starships</Nav.Link>
						<Nav.Link as={NavLink} end to="/vehicles">Vehicles</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
