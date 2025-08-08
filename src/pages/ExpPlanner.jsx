import React, { useEffect, useState, useContext } from "react";
import { TripContext } from "../components/TripContext";

export default function ExpPlanner() {

  const {selectedBody, setSelectedBody, selectedVessel, setSelectedVessel} = useContext(TripContext);

  //Destination and Vessels State:
  const [ bodies, setBodies] = useState([])
  const [ vessels, setVessels] = useState([])

  //Loading
  const [loadingBodies, setLoadingBodies] = useState(true);
  const [loadingVessels, setLoadingVessels] = useState(true);
  const anyLoading = loadingBodies || loadingVessels;
  
  //Fetch Destinations
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
          setLoadingBodies(false);
        });
  }, []);

  //handle select destination
  function handleDestinationSelect(event) {
    const selectedId = event.target.value;
    const selected = bodies.find((body) => body.id == selectedId || null);
    setSelectedBody(selected);
  }


  //Fetch Vessels
  useEffect(() => {
    fetch("https://swapi.info/api/starships")
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          console.log("fetch request failed")
        }
      })
      .then((data) => {
        const list = Array.isArray(data) ? data : (data?.results || []);
        setVessels(list);
      })
      .catch((error) => console.error("Error launching space vessels", error));
      setLoadingVessels(false);
  }, []);


  //handle select vessel
  function handleVesselSelect(event) {
    const name = event.target.value;
    const ship = vessels.find((v) => v.name == name || null);
    setSelectedVessel(ship);
  }



   if (anyLoading) return <p>Launching your next adventure...</p>;

  
  return (
    <>
      <h1>Expedition planner</h1>

      {/* Destination dropdown */}
      <div>
        <label htmlFor="destination-select">Choose a destination:</label>
        <select id="destination-select" 
        onChange={handleDestinationSelect} value={selectedBody?.id || ""}>
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

      {/* Vessel Dropdown */}
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="vessel-select">Choose a vessel:&nbsp;</label>
        <select
          id="vessel-select"
          onChange={handleVesselSelect}
          value={selectedVessel?.name || ""}
        >
          <option value="">Select a vessel</option>
          {vessels.map((v) => (
            <option key={v.name} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>
      </div>

      {/* Vessel info */}
      {selectedVessel && (
        <div>
          <p>{selectedVessel.name}</p>
          <p>{selectedVessel.max_atmosphering_speed}</p>
        </div>
      )}
     

    </>
  );
}

