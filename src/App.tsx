import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'
// pages
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'
import ResourcesPage from './pages/overviewPages/ResourcesPage'
import FilmsPage from './pages/overviewPages/FilmsPage'
import PeoplePage from './pages/overviewPages/PeoplePage'
import PlanetsPage from './pages/overviewPages/PlanetsPage'
import SpeciesPage from './pages/overviewPages/SpeciesPage'
import VehiclesPage from './pages/overviewPages/VehiclesPage'
import StarshipsPage from './pages/overviewPages/StarshipsPage'
import FilmPage from './pages/singleResourcePages/FilmPage'
import PersonPage from './pages/singleResourcePages/PersonPage'
import PlanetPage from './pages/singleResourcePages/PlanetPage'
import StarshipPage from './pages/singleResourcePages/StarshipPage'
import VehiclePage from './pages/singleResourcePages/VehiclePage'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<div className='py-3 container'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path="/resources" element={<ResourcesPage />} />
					<Route path="/films" element={<FilmsPage />} />
					<Route path="/films/:filmId" element={<FilmPage />} />
					<Route path="/people" element={<PeoplePage />} />
					<Route path="/people/:personId" element={<PersonPage />} />
					<Route path="/planets" element={<PlanetsPage />} />
					<Route path="/planets/:planetId" element={<PlanetPage />} />
					<Route path="/species" element={<SpeciesPage />} />
					<Route path="/starships" element={<StarshipsPage />} />
					<Route path="/starships/:starshipId" element={<StarshipPage />} />
					<Route path="/vehicles" element={<VehiclesPage />} />
					<Route path="/vehicles/:vehicleId" element={<VehiclePage />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
