import { useState, useEffect } from 'react';
import DestinationCarousel from '../components/DestinationCarousel';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function Destinations() {

  const navigate = useNavigate();

  //for explore button
  const handleBodySelect = (id) => {
    navigate(`/destinations/${id}`);    
  };

  return (
    <div>
      <h1>Uncover the Secrets of our Stellar Getaways</h1>
      <DestinationCarousel onSelect={handleBodySelect}/>
      <Outlet />   
    </div>
  );
}

