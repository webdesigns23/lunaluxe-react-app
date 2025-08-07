import { useState, useEffect } from 'react';
import VesselCarousel from '../components/VesselCarousel';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function SpaceVessels() {
	
	const navigate = useNavigate();
  
	//for vessel stats
	const handleVesselSelect = (id) => {
	  navigate(`/vessels/${id}`);    
	};

  return (
	<div>
	  <h1>Your Ride to the Unknown Awaits</h1>
	  <VesselCarousel onVesselSelect={handleVesselSelect}/>
	  <Outlet />   
	</div>
  );
}
