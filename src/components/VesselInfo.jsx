import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VesselInfo() {
	const { id } = useParams();

	const [selectedVessel, setSelectedVessel] = useState(null);
	const [loading, setLoading] = useState(false);

	//Fetch Vessels
	useEffect(() => {
		async function fetchVesselById() {
			try {
				const response = await fetch(`https://swapi.info/api/starships/${id}`);
				const data = await response.json();
				setSelectedVessel(data);
				setLoading(false);
			} catch (error) {
				console.error("Error launching vessel info", error)
				setLoading(false);
			}
		};
		fetchVesselById()
	}, [id]);


	if (loading) return <p>Launching info...</p>;
	if (!selectedVessel) return <p>No info found.</p>;


  return (
  <div id="target-vessels" className="vessel-details">
	<h2>{selectedVessel.name}</h2>
	<p>Max Speed:{selectedVessel.max_atmosphering_speed} km/h</p>

	<p>Passengers Capacity: {parseInt(selectedVessel.passengers)}</p>
	<p>Crew Capacity: {parseInt(selectedVessel.crew)}</p>

	<p>Hyperdrive Rating: {selectedVessel.hyperdrive_rating}</p>
	<p>Ship Class: {selectedVessel.starship_class}</p>
	</div>
  );
}
