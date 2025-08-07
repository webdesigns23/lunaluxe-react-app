import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/Carousel.css"

// destination planet data
import vessels from "../data/vessels";


export default function VesselCarousel({onVesselSelect}) {

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
		{vessels.map((v) => (
		<div className="main-slide" key={v.id}>
			<div className="inner-slide">
				<h2 className="destination-name"> {v.name}</h2>
				<img
              	className="card-image"
              	src={v.image}
              	alt={v.alt}
              	style={{ width: "90%", height: "400px", objectFit: "cover" }}
            	/>
				<button className="explore-button" 
				onClick={() => onVesselSelect(v.id)}>Vessel Stats
				</button>
			</div>
		</div>
		))}
    </Slider>
  );
}
