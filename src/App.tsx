import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'
// pages
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'
import ResourcesPage from './pages/ResourcesPage'
import FilmsPage from './pages/FilmsPage'
import PeoplePage from './pages/PeoplePage'
import PlanetsPage from './pages/PlanetsPage'
import SpeciesPage from './pages/SpeciesPage'
import VehiclesPage from './pages/VehiclesPage'
import StarshipsPage from './pages/StarshipsPage'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className='py-3'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path="/resources" element={<ResourcesPage />} />
					<Route path="/films" element={<FilmsPage />} />
					<Route path="/people" element={<PeoplePage />} />
					<Route path="/planets" element={<PlanetsPage />} />
					<Route path="/species" element={<SpeciesPage />} />
					<Route path="/starships" element={<StarshipsPage />} />
					<Route path="/vehicles" element={<VehiclesPage />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
