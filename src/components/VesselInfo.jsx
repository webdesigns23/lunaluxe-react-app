import React from "react";
import { useOutletContext} from "react-router-dom";

export default function VesselInfo() {
  const { selectedVessel, loading } = useOutletContext();

  if (loading) return <p>Launching info...</p>;
  if (!selectedVessel) return <p>No info found.</p>;


  return (
  <div className="vessel-details">
	<h2>{selectedVessel.name}</h2>
	<p>Max Speed:{selectedVessel.max_atmosphering_speed}</p>

	<p>Passengers Capacity: {parseInt(selectedVessel.passengers)}</p>
	<p>Crew Capacity: {parseInt(selectedVessel.crew)}</p>

	<p>Hyperdrive Rating: {selectedVessel.hyperdrive_rating}</p>
	<p>Ship Class: {selectedVessel.starship_class}</p>
	</div>
  );
}
