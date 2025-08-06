import React, { useState } from "react";
import Slider from "react-slick";

// destination planet data
import destinations from "../data/destinations";

export default function DestinationCarousel() {
	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const displayDestinations = destinations.map((destination) => (
	<div key={destination.name}>
		<iframe 
			title={destination.name} 
			style={{width: "90%", height: "500px"}} 
			src={destination.embedUrl} alt={destination.alt}>
		</iframe>
		<h2>{destination.name}</h2>
	</div>
  ))


  return (
	<Slider {...settings}>
		{displayDestinations}  
    </Slider>
  );
}
