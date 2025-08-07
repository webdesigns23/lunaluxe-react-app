import React, { useEffect, useState, useContext } from "react";
import { TripContext } from "../components/TripContext";

export default function ExpPlanner() {

  const {selectedBody, setSelectedBody} = useContext(TripContext);

  const [ bodies, setBodies] = useState([])
  // const [ allVessles, setAllVessels] = useState([])
  const [ launching, setLaunching] = useState(true)
  
  //need fetch to get all body info and will add a .filter for body
  useEffect(() => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
        .then(res => res.json())
        .then(data => {
          const planets = data.bodies.filter((body) => body.isPlanet);
          setBodies(planets);
          setLaunching(false);
        })
        .catch(error => {
          console.error("Error launching info", error);
          setLaunching(false);
        });
  }, []);

  //handle select destination
  function handleSelect(event) {
    const selectedId = event.target.value;
    const selected = bodies.find((body) => body.id == selectedId);
    setSelectedBody(selected);
  }


  // //All Vessel info
  // useEffect(() => {
  //   fetch("https://swapi.info/api/starships")
  //     .then(response => {
  //       if(response.ok) {
  //         return response.json()
  //       } else {
  //         console.log("fetch request failed")
  //       }
  //     })
  //     .then(data => setAllVessels(data.bodies))


  //     .catch(error => console.error("Error launching space vessels", error));
  // }, []);


   if (launching) return <p>Launching your next adventure...</p>;

  
  return (
    <>
      <h1>Expedition planner</h1>
      <div>
        <label htmlFor="destination-select">Choose a destination:</label>
        <select id="destination-select" 
        onChange={handleSelect} value={selectedBody?.id || ""}>
          <option value="">Select a destination</option>
          {bodies.map((body) => (
            <option key={body.id} value={body.id}>
            {body.englishName}
            </option>
          ))}
        </select>
      </div>

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

