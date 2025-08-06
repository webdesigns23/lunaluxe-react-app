import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/DestinationCarousel.css"

// destination planet data
import destinations from "../data/destinations";

export default function DestinationCarousel() {
	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
	centerMode: true,
  };


  return (
	<Slider {...settings}>
		{destinations.map((destination) => (
		<div className="main-slide" key={destination.name}>
			<div className="inner-slide">
				<iframe className="card-frame"
					title={destination.name} 
					style={{width: "90%", height: "400px"}} 
					src={destination.embedUrl} alt={destination.alt}>
				</iframe>
				<h2 className="destination-name"> {destination.name}</h2>
				<button>Start Exploring</button>
			</div>
		</div>
		))}
    </Slider>
  );
}
