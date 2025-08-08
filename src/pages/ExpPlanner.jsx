import { useEffect, useState } from "react";
import ChooseBody from "../components/ChooseBody";
import ChooseVessel from "../components/ChooseVessel";
import PlanetGallery from "../components/PlanetGallery";
import "../styles/ExpPlanner.css"

export default function ExpPlanner() {
  const [planets, setPlanets] = useState([]);
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

  if (loading) return <p>Launching planets....</p>;


  return (
    <>
      <h1>Expedition planner</h1>
      <p>Journey in to the unknown! Plan your next great adventure!</p>
      <PlanetGallery planets={planets}/>     
    </>
  );
}

