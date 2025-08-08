import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/Carousel.css"


// destination planet data
import destinations from "../data/destinations";


export default function DestinationCarousel({onSelect}) {


	const settings = {
    dots: true,
	infinite: true,
	accessibility: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
	centerMode: true,
	centerPadding: "28%",
  };


  return (
	<Slider {...settings}>
		{destinations.map((destination) => (
		<div className="main-slide" key={destination.name}>
			<div className="inner-slide">
				<h3 className="destination-name"> {destination.name}</h3>
				<img
              	className="card-image"
              	src={destination.image}
              	alt={destination.alt}
              	style={{ width: "90%", height: "400px", objectFit: "cover" }}
            	/>
				<button className="explore-button" 
				onClick={() => onSelect(destination.id)}>Expolore {destination.name}</button>
			</div>
		</div>
		))}
    </Slider>
  );
}
