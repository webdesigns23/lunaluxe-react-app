import { useState, useEffect } from 'react';
import DestinationGallery from '../components/DestinationGallery';
import DestinationCard from '../components/DestinationCard';

export default function Destinations() {

  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies?filter[]=isPlanet,eq,true")
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          console.log("fetch request failed")
        }
      })
      .then(data => setPlanets(data.bodies))
      .catch(error => console.error("Error loading planets", error));
  }, []);

  const handleSelect = (id) => {
    setLoading(true);
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
      .then(res => res.json())
      .then(data => {
        setSelectedPlanet(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading planet info", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Choose Your Destination</h1>
      <DestinationGallery planets={planets} onSelect={handleSelect} />
      {selectedPlanet ? <DestinationCard planet={selectedPlanet} /> : null}
    </div>
  );
}