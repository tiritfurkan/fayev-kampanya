import React from 'react'
import Slider from "react-slick";
import ReactTextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from 'react';

const Giris = () => {


  const [textIndex, setTextIndex] = useState(0);


  const texts = [
    "36 Ay Taksit",
  "Mayıs Ayına Özel",
  "36 Ay Taksit",
  "Uzun Vade",
  "Kolay Ödeme",
 
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((textIndex) => (textIndex + 1) % texts.length);
    }, 3000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

 
  var settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 5024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "40px",
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 3024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
          infinite: true,
          dots: false
        }
      },
     
     
    ]
};

  
    return (
    <div className="sm:grid sm:grid-cols-3 mx-auto" name="giris">
  <div className="sm:col-span-2 p-8 flex items-center">
    <div className="w-full">
      <h1 className="sm:text-5xl text-4xl font-extrabold flex flex-col 2xl:ml-40 lg:text-7xl mt-36 sm:mt-2 mb-4">
        <span className="text-center">1,99 Vade Farkı,</span>
        <span className="bg-gradient-to-r from-blue-600 to-blue-900 p-2 text-white sm:text-center text-center text-2xl lg:text-3xl lg:p-4 xl:text-5xl md:text-2xl sm:text-2xl 2xl:text-7xl">
          
        <section className="flex justify-center">
          <ReactTextTransition
            springConfig={presets.gentle}
            className="big text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl"
            delay={30}
            inline
          >
            {texts[textIndex]}
          </ReactTextTransition>
          <p>&nbsp;Fayev'de!</p>
        </section>
        </span><p className="text-2xl font-regular w-full font-light mt-3 text-center">İhtiyacınıza uygun taksit seçenekleriyle, hemen şimdi Fayev'e gelin, evinizin keyfini çıkarın. Arsa sizden, eviniz Fayev'den. </p>
      </h1>
      
    </div>
  </div>
  <div className="sm:col-span-1 mt-20 sm:mt-0">
    <div className=" bg-gradient-to-r from-blue-600 to-blue-900 h-[714px] sm:rounded-bl-3xl select-none focus:outline-none">
        <div className=" h-[450px] w-full m-auto pt-28 select-none">
        <div className="slider-container focus:outline-none">
        <Slider {...settings}>
        <div className="focus:outline-none">
    
        <img src="./pic/ev2.jpg" alt="Görsel" className="h-[530px] w-[285px] object-left-bottom rounded-lg select-none focus:outline-none" />
            <h3 className="text-lg font-extrabold text-left mt-2 ml-20 select-none text-white">L2 ALTINBEŞİK</h3>
        </div>
        <div className="focus:outline-none">
        <img src="./pic/ev3.jpg" alt="Görsel" className="h-[530px] w-[285px] object-left-bottom rounded-lg select-none focus:outline-none" />
        <h3 className="text-lg font-extrabold text-left mt-2 ml-20 select-none text-white">YAZÖREN M3</h3>
        </div>
        <div className="focus:outline-none">
        <img src="./pic/ev4.jpg" alt="Görsel" className="h-[530px] w-[285px] object-left-bottom rounded-lg select-none focus:outline-none" />
        <h3 className="text-lg font-extrabold text-left mt-2 ml-20 select-none text-white">DAMLATAŞ</h3>
        </div>
        <div className="focus:outline-none">
        <img src="./pic/ev3.jpg" alt="Görsel" className="h-[530px] w-[285px] object-left-bottom rounded-lg select-none focus:outline-none" />
        <h3 className="text-lg font-extrabold text-left mt-2 ml-20 select-none text-white">Üç Dört Beş</h3>
        </div>
 
        </Slider>
        </div>
        
        </div>
    <img src="./pic/Wave.svg" alt="Görsel" className="h-[667px] w-[1920px] object-left-bottom" />
    </div>
  </div>
</div>

  )
}

export default Giris