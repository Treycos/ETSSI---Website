import React from 'react';
import Slider from "react-slick";
import amphi from '../img/banner/amphi_optimized.jpg';
import amphi2 from '../img/banner/amphi2_optimized.jpg';
import campus from '../img/banner/campus1_optimized.jpg';
import campus2 from '../img/banner/campus2_optimized.jpg';
import '../css/carousel.css';

export default function Carousel() {

    const slides = [
        {
            src: amphi,
            title: "",
            sub: ""
        },
        {
            src: campus2,
            title: "",
            sub: ""
        },
        {
            src: amphi2,
            title: "",
            sub: ""
        },
        {
            src: campus,
            title: "",
            sub: ""
        }
    ];

    return (
        <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={4000}>
            {slides.map(({ src, title, sub }) => 
                <div className="slide" key={src}>
                    <img className='banner-image' id={src} src={src} />
                </div>
            )}
        </Slider>
    )
}
