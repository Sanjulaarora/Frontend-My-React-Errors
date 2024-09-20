import React from 'react'
import background from '../images/BannerBg.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Banner = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items =[
    <h1 className="font-anton text-[#e0ded8] text-xs media426:text-md media769:text-lg lg:text-2xl text-center p-1 media426:p-2 mt-4" onDragStart={handleDragStart} role="presentation" >
      There needs to be an error code that means "I recieved your request but decided to ignore you".
      <br />
      - Martha Wells
    </h1>,
    <h1 className="font-anton text-[#e0ded8] text-md media426:text-2xl lg:text-4xl text-center p-1 media426:p-2 mt-4" onDragStart={handleDragStart} role="presentation" >Errors are inevitable aspect of the learning process.</h1>,
    <h1 className="font-anton text-[#e0ded8] text-xs media426:text-lg lg:text-2xl text-center p-1 media426:p-2 mt-4" onDragStart={handleDragStart} role="presentation" >
      In programming, as in everything else, to be in error is to be reborn.
      <br />
      - Alan Perlis
    </h1>,
    <h1 className="font-anton text-[#e0ded8] text-md media426:text-2xl lg:text-4xl text-center p-1 media426:p-2 mt-4" onDragStart={handleDragStart} role="presentation" >Code never lies, comments sometimes do.</h1>,  
  ];
  const responsive ={
    0:{
      items: 1,
    },
  };

  return (
    <section id="banner" className="h-36 media426:h-40 rounded-lg" style={{backgroundImage:`url(${background})`, loading:'lazy'}}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={2000}
        animationDuration={2000}
        diableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
    />
    </section>
  )
}

export default Banner;