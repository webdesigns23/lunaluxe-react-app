import React, { useEffect, useState, useContext } from "react";
import { TripContext } from "../context/TripContext";

export default function ChooseBody() {

  const {selectedBody, setSelectedBody} = useContext(TripContext);
  const [ bodies, setBodies] = useState([])
 
  //Fetch Destinations
  useEffect(() => {
    async function fetchBodyDetails(){
      try{
        const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies/");
        const data = await response.json();

        const planets = data.bodies.filter((body) => body.isPlanet);
        setBodies(planets);
      } catch (error){
        console.error("Error launching info", error)
      }
    };
    fetchBodyDetails()
  }, []);

  //handle select destination
  function handleDSelect(event) {
    const selectedId = event.target.value;
    const selected = bodies.find((body) => body.id == selectedId || null);
    setSelectedBody(selected);
  }

  return (
    <>
      <h1>Choose Destination</h1>

      {/* Destination dropdown */}
      <div>
        <label htmlFor="destination-select">Choose a destination:</label>
        <select id="destination-select" 
        onChange={handleDSelect} value={selectedBody?.id || ""}>
          <option value="">Select a destination</option>
          {bodies.map((body) => (
            <option key={body.id} value={body.id}>
            {body.englishName}
            </option>
          ))}
        </select>
      </div>
      
      {/* Destination info */}
      {selectedBody && (
        <div>
          <h2>PLACEHOLDER - Variables needed for calculations:</h2>
          <p>{selectedBody.englishName}</p>
           {selectedBody.avgTemp > 0 && (
        <p>
          Temperature: 
          {((selectedBody.avgTemp - 273.15) * 9/5 + 32).toFixed(1)} Fahrenheit
        </p>
        )}
          <p>{selectedBody.gravity}</p>
          <p>distance from earth: {Math.abs(selectedBody.semimajorAxis - 149598023).toLocaleString()} km</p>
        </div>
      )}
    
    </>
  );
}

