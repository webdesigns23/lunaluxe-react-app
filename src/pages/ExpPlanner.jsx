import React, { useEffect, useState } from "react";
import destinations from "../data/destinations";
import vessels from "../data/vessels";

export default function ExpPlanner() {

  const [ allDestinations, setAllDestinations] = useState([])
  const [ allVessles, setAllVessels] = useState([])
  const [ launching, setlaunching] = useState(true)

  //All Body info
  useEffect(() => {
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies?filter[]=isPlanet,eq,true")
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          console.log("fetch request failed")
        }
      })
      .then(data => setAllDestinations(data.bodies))
      .catch(error => console.error("Error launching destinations", error));
  }, []);


  //All Vessel info
  useEffect(() => {
    fetch("https://swapi.info/api/starships")
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          console.log("fetch request failed")
        }
      })
      .then(data => setAllVessels(data.bodies))
      .catch(error => console.error("Error launching space vessels", error));
  }, []);


   if (launching) return <p>Launching your next adventure...</p>;

  
  return (
    <header>
      <h1>
        Expedition planner
      </h1>
    </header>
  );
}