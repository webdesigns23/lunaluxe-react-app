import { useState, useEffect } from 'react';
import DestinationCarousel from '../components/DestinationCarousel';
import BodyInfo from '../components/BodyInfo';

export default function Destinations() {

  const [selectedBody, setSelectedBody] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://api.le-systeme-solaire.net/rest.php/bodies?filter[]=isPlanet,eq,true")
  //     .then(response => {
  //       if(response.ok) {
  //         return response.json()
  //       } else {
  //         console.log("fetch request failed")
  //       }
  //     })
  //     .then(data => setPlanets(data.bodies))
  //     .catch(error => console.error("Error loading planets", error));
  // }, []);

  const handleBodySelect = (id) => {
    setLoading(true);
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
      .then(res => res.json())
      .then(data => {
        setSelectedBody(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error launching info", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Scout Out Some Stellar Cosmic Sanctuaries</h1>
      <DestinationCarousel onSelect={handleBodySelect}/>
      {selectedBody ? <BodyInfo planet={selectedBody}/> : null}
      {/*<Outlet /> to pass state/context to nested component destination info*/}     
    </div>
  );
}

