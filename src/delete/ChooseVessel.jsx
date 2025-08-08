// import React, { useEffect, useState, useContext } from "react";
// import { TripContext } from "../context/TripContext";

// export default function ChooseVessel() {

// 	const { selectedVessel, setSelectedVessel } = useContext(TripContext);
// 	const [vessels, setVessels] = useState([])

// 	//Fetch Vessels
// 	useEffect(() => {
// 		async function fetchVesselDetails() {
// 			try {
// 				const response = await fetch("https://swapi.info/api/starships");
// 				const data = await response.json();

// 				const list = Array.isArray(data) ? data : (data?.results || []);
// 				setVessels(list);
// 			} catch (error) {
// 				console.error("Error launching space vessels", error)
// 			}
// 		};
// 		fetchVesselDetails()
// 	}, []);

// 	//handle select vessel
// 	function handleVSelect(event) {
// 		const name = event.target.value;
// 		const ship = vessels.find((v) => v.name == name || null);
// 		setSelectedVessel(ship);
// 	}
  
//   return (
// 	<>
// 	  <h1>Choose Vessel</h1>

// 	  {/* Vessel Dropdown */}
// 	  <div style={{ marginBottom: 16 }}>
// 		<label htmlFor="vessel-select">Choose a vessel:&nbsp;</label>
// 		<select
// 		  id="vessel-select"
// 		  onChange={handleVSelect}
// 		  value={selectedVessel?.name || ""}
// 		>
// 		  <option value="">Select a vessel</option>
// 		  {vessels.map((v) => (
// 			<option key={v.name} value={v.name}>
// 			  {v.name}
// 			</option>
// 		  ))}
// 		</select>
// 	  </div>

// 	  {/* Vessel info */}
// 	  {selectedVessel && (
// 		<div>
// 		  <p>{selectedVessel.name}</p>
// 		  <p>{selectedVessel.max_atmosphering_speed}</p>
// 		</div>
// 	  )}

// 	</>
//   );
// }

