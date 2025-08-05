import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationList from './components/DestinationList'
import DestinationCard from './components/DestinationCard'
import Excursions from './pages/Excursions'
import ExcursionCard from './components/ExcursionCard'
import ExpPlanner from './pages/ExpPlanner'
import NavBar from './components/NavBar';

export default function App() {
  return (
    <>
       <BrowserRouter>
      <NavBar /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />}>
          <Route index element={<DestinationList />} />
          <Route path=":id" element={<Excursions />} />
        </Route>
        <Route path="/destinations/:id/excursions/:destinationId" element={<ExcursionCard />} />
        <Route path="/expedition_planner" element={<ExpPlanner />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

