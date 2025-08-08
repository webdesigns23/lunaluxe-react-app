import { useEffect, useState } from "react";
// import ChooseBody from "../components/ChooseBody";
// import ChooseVessel from "../components/ChooseVessel";
import PlanetGallery from "../components/PlanetGallery";
import ShipGallery from "../components/ShipGallery";
import "../styles/ExpPlanner.css"

export default function ExpPlanner() {
  const [planets, setPlanets] = useState([]);
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets(){
      try {
        const response = await fetch("https://api.le-systeme-solaire.net/rest.php/bodies?filter[]=isPlanet,eq,true");
        if (!response.ok) throw new Error("Failed to fetch info");
        const data = await response.json();
        setPlanets(data.bodies || []);
      } catch (error) {
        console.error("Error loading planets", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlanets()
  }, []);

  useEffect(() => {
    async function fetchVesselDetails() {
        try {
          const response = await fetch("https://swapi.info/api/starships");
          const data = await response.json();

          const list = Array.isArray(data) ? data : (data?.results || []);

          const shipsAllowed = [
            "Star Destroyer",
            "Millennium Falcon",
            "X-wing",
            "TIE Advanced x1",
            "Imperial shuttle",
            "Solar Sailer"
          ];

          const filteredShips = list.filter(ship => shipsAllowed.includes(ship.name));
          setShips(filteredShips);
        } catch (error) {
          console.error("Error launching space vessels", error)
        } finally {
          setLoading(false)
        }
      };
      fetchVesselDetails()
  }, []);

  if (loading) return <p>Launching planets....</p>;


  return (
    <>
      <h1>Expedition planner</h1>
      <p>Journey in to the unknown! Plan your next great adventure!</p>
      <img src="src/assets/space_travel.jpg" />

      <h2>Filter by tempe and gravity to find your ideal vacationing destination</h2>
      <PlanetGallery planets={planets}/>   

      <h2>Filter by speed to find your ideal transportation vessel!</h2> 
      <ShipGallery ships={ships} />
    </>
  );
}

