import { useState, useEffect } from 'react';
import VesselCarousel from '../components/VesselCarousel';
import { Outlet } from 'react-router-dom';

export default function SpaceVessels() {

  const [selectedVessel, setSelectedVessel] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVesselSelect = (id) => {
	setLoading(true);
	fetch(`https://swapi.info/api/starships/${id}`)
	  .then(res => res.json())
	  .then(data => {
		setSelectedVessel(data);
		setLoading(false);
	  })
	  .catch(error => {
		console.error("Error launching info", error);
		setLoading(false);
	  });
  };

  return (
	<div>
	  <h1>Our Vessels</h1>
	  <VesselCarousel />
	  {/* <Outlet context={{selectedVessel, loading}} />    */}
	</div>
  );
}


//   return (
// 	<div>
// 	  <h1>Uncover the Secrets of our Stellar Getaways</h1>
// 	  <VesselCarousel onSelect={handleVesselSelect}/>
// 	  <Outlet context={{selectedVessel, loading}} />   
// 	</div>
//   );
// }
