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
          console.log(planets)//to check
        })
        .catch(error => {
          console.error("Error launching info", error);
          setLaunching(false);
        });
  }, []);


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
    <header>
      <h1>
        Expedition planner
      </h1>
    </header>
  );
}

