import { useContext} from "react";
import { TripContext } from "../context/TripContext";

export default function PlanetCard({planet}) {
  const { selectedBody, setSelectedBody } = useContext(TripContext);
  const isSelected = selectedBody?.englishName === planet.englishName;

	return (
    <div className={`details ${isSelected ? "selected" : ""}`}>
      <h3>{planet.englishName}</h3>
      <p>Gravity:{planet.gravity} m/s²</p>
      <p>Temperature: {planet.avgTemp} K</p>
      <p>Moons: {planet.moons?.length || 0}</p>
      <p>Distance from Sun: {planet.semimajorAxis.toLocaleString()} km</p>

      <button className="travel-button" 
        onClick={() => setSelectedBody(isSelected ? null : planet)} 
        aria-pressed={isSelected}>
        {isSelected ? "Destination Selected" : "Select"}
      </button>
    </div>
  );
}