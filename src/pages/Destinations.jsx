import { useState, useEffect } from 'react';
import DestinationCarousel from '../components/DestinationCarousel';
import { Outlet } from 'react-router-dom';

export default function Destinations() {

  const [selectedBody, setSelectedBody] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <h1>Uncover the Secrets of our Stellar Getaways</h1>
      <DestinationCarousel onSelect={handleBodySelect}/>
      <Outlet context={{selectedBody, loading}} />   
    </div>
  );
}

