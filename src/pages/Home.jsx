import React from "react";

export default function Home() {
    return (
    <>
      <img src="src/assets/space_dog.PNG" alt="man in a astronaut helmet relaxing"/>
        <h1>
          Your interstellar vacation starts here! Discover distant planets and plan your luxury space adventure
          </h1>
      <section className="about">
        <h2>About LunaLuxe</h2>
        <p>
          LunaLuxe is your gateway to the stars—a next-generation travel platform designed for cosmic explorers. Discover our fleet of state-of-the-art vessels, explore enchanting interstellar destinations, and use our expedition planner to find the perfect journey tailored to your dream vacation. Make sure to check out our Planet based excursions!
        </p>
      </section>

      <img src="src/assets/venus_tour.PNG" 
        style={{ width: "300px" }} 
        alt="venus tourism poster"/>
      <img src="src/assets/mars_tour.PNG" 
        style={{ width: "300px" }} 
        alt="mars tourism poster"/>
      <img src="src/assets/jupiter_tour.PNG" 
        style={{ width: "300px" }} 
        alt="jupiter tourism poster"/>
      <img src="src/assets/tour.PNG" 
        style={{ width: "300px" }} 
        alt="space tour poster"/>
    </>
  );
}