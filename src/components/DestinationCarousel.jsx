import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/Carousel.css"
import { useNavigate } from "react-router-dom";

// destination planet data
import destinations from "../data/destinations";


export default function DestinationCarousel({onSelect}) {

	const navigate = useNavigate();

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

  //new route for click
  function handleClick(id) {
	onSelect(id);
	navigate(`/destinations/${id}`);
  }


  return (
	<Slider {...settings}>
		{destinations.map((destination) => (
		<div className="main-slide" key={destination.name}>
			<div className="inner-slide">
				<h2 className="destination-name"> {destination.name}</h2>
				<img
              	className="card-image"
              	src={destination.image}
              	alt={destination.alt}
              	style={{ width: "90%", height: "400px", objectFit: "cover" }}
            	/>
				<button className="explore-button" onClick={() => handleClick(destination.id)}>Expolore {destination.name}</button>
			</div>
		</div>
		))}
    </Slider>
  );
}
