import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationInfo from './components/DestinationInfo';
import ExpPlanner from './pages/ExpPlanner'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/destinations" element={<Destinations />} >
            <Route path=":id" element={<DestinationInfo />} />
          </Route>
          <Route path="/expedition_planner" element={<ExpPlanner />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

