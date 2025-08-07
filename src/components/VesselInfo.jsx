import React from "react";
import { useOutletContext} from "react-router-dom";

export default function VesselInfo() {
  const { selectedBody, loading } = useOutletContext();

  if (loading) return <p>Launching info...</p>;
  if (!selectedBody) return <p>No info found.</p>;

  return (
  <div className="vessel-details">
	  {/* <h2>{selectedBody.englishName}</h2>
	  <p>Gravity:{selectedBody.gravity} m/s²</p>

	  {selectedBody.avgTemp > 0 && (
	  <p>
		Temperature: 
		{((selectedBody.avgTemp - 273.15) * 9/5 + 32).toFixed(1)} Fahrenheit
	  </p>
	  )}
	  
	  <p>Radius: {selectedBody.meanRadius} km</p>
	  <p>Moons: {selectedBody.moons?.length || 0}</p>
	  <p>Orbital Litter: 
		{selectedBody.moons?.map(moon => moon.moon).join(', ') || 'None'}
	  </p>
	  <p>Distance from Sun: {selectedBody.semimajorAxis.toLocaleString()} km</p> */}
	</div>
  );
}
