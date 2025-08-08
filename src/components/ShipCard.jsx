import { useContext} from "react";
import { TripContext } from "../context/TripContext";

export default function ShipCard({ship}) {
	const { selectedVessel, setSelectedVessel } = useContext(TripContext);
  	const isSelected = selectedVessel?.name === ship.name;

	return (
	<div className={`details ${isSelected ? "selected" : ""}`}>
	  <h3>{ship.name}</h3>
	  <p>Speed:{ship.max_atmosphering_speed} km/hr </p>

	   <button className="travel-button" 
        onClick={() => setSelectedVessel(isSelected ? null : ship)} 
        aria-pressed={isSelected}>
        {isSelected ? "Destination Selected" : "Select"}
      </button>
	
	</div>
  );
}