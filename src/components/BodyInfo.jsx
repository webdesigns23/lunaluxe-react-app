import React, { useContext, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { TripContext } from "../components/TripContext"

//info for apod
import destinations from "../data/destinations";

export default function BodyInfo() {
  const { id } = useParams();

  //use id to look up apodDate
  const destination = destinations.find(d => d.id === id);
  const apodDate = destination.apodDate

  //*modify to use useContext
  const { setSelectedBody: setBodyInContext } = useContext(TripContext);

  const [selectedBody, setSelectedBody] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apodData, setApodData] = useState(null);

  

  //need to move to .env file!
  const NASA_API_KEY = "67GRyg8nzIMcWaJqbGhfJyaFxxs2gGGbepdu1tgM"; 
  

  
  useEffect(() => {    
    setLoading(true);

      //fetch body info based on id
      fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
        .then(res => res.json())
        .then(data => {
          setSelectedBody(data);
          setBodyInContext(data) //*save in context
          setLoading(false);
        })
        .catch(error => {
          console.error("Error launching info", error);
          setLoading(false);
        });

      //fetch nasa APOD data
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${apodDate}`)
      .then((res) => res.json())
        .then((data) => {
          setApodData(data);
        })
        .catch((error) => {
          console.error("Error fetching NASA APOD", error);
        });
  
  }, [id]);


  if (loading) return <p>Launching info...</p>;
  if (!selectedBody) return <p>No info found.</p>;

  return (
    <div id="target-body" >
      <section className="body-details">
        <h2>{selectedBody.englishName}</h2>
        <p>Gravity:{selectedBody.gravity} m/s²</p>

        {selectedBody.avgTemp > 0 && (
        <p>
          Temperature: 
          {((selectedBody.avgTemp - 273.15) * 9/5 + 32).toFixed(1)} Fahrenheit
        </p>
        )}
        
        <p>Radius: {selectedBody.meanRadius} km</p>
        <p>Moons: {selectedBody.moons?.length || 0}</p>
        <p>Orbital Litter: 
          {selectedBody.moons?.map(moon => moon.moon).join(', ') || 'None'}
        </p>
        <p>
          Average Distance from Sun: {selectedBody.semimajorAxis.toLocaleString()} km
        </p>
        <p>
          Average Distance from Earth: {
          selectedBody.semimajorAxis ? Math.abs(Number(selectedBody.semimajorAxis) - 149598023) : "Unknown"} km
        </p>
       </section> 

       <section className="nasa-apod">
        <h3>What {selectedBody.englishName} has to offer:</h3>
        <p>Title: {apodData.title}</p>
        <p>Date:{apodData.date}</p>
        {apodData.media_type === "image" && (
            <img
              src={apodData.url}
              alt={apodData.title}
              style={{ maxWidth: "100%", borderRadius: "12px" }}
            />
        )}
        <p style={{ marginTop: "1rem" }}>{apodData.explanation}</p>
       </section>
    </div>
    
  );
}
