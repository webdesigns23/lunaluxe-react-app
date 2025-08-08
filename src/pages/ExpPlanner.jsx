import { useEffect, useState } from "react";
import PlanetGallery from "../components/PlanetGallery";
import ShipGallery from "../components/ShipGallery";
import TripSummary from "../components/TripSummary";
import "../styles/ExpPlanner.css"

export default function ExpPlanner() {

  const [planets, setPlanets] = useState([]);
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExpData(){
      try {
        const [planetsResponse, ShipsResponse] = await Promise.all([
        fetch("https://api.le-systeme-solaire.net/rest.php/bodies?filter[]=isPlanet,eq,true"),
        fetch("https://swapi.info/api/starships")
        ])

        if (!planetsResponse.ok) throw new Error("Failed to fetch planets");
        if (!ShipsResponse.ok) throw new Error("Failed to fetch ships");

        const planetsData = await planetsResponse.json();
        const shipsData = await ShipsResponse.json();

        setPlanets(planetsData.bodies || []);

        const list = Array.isArray(shipsData) ? shipsData : (shipsData?.results || []);
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
        console.error("Error loading expedition data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExpData()
  }, []);     

  if (loading) return <p>Launching planets....</p>;

  return (
    <>
      <h1>Expedition planner</h1>
      <p>Journey in to the unknown! Plan your next great adventure!</p>
      <img src="src/assets/space_travel.jpg" />

      <h2>Find your ideal vacationing destination</h2>
      <PlanetGallery planets={planets}/>   

      <h2>Find your ideal transportation vessel</h2> 
      <ShipGallery ships={ships} />

      <TripSummary />
    </>
  );
}

