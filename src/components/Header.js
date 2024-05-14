import React from 'react'
import logo from '../pic/fayevlogo.svg';
import { IoMdCall } from "react-icons/io";
import {  Button,  Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Link, Element } from 'react-scroll';

import { useEffect } from 'react';

const Header = () => {

 
  useEffect(() => {
    
   
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

   
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

   
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);



  const scrollTo = () => {
    scroll.scrollTo(10); 
  };

  const scrollMore = () => {
    scroll.scrollMore(10); 
  };


  const handleSetActive = (to) => {
    
  };


  return (
    <div className="h-[100px] w-auto flex  justify-between items-center mx-auto fixed top-0 left-0 right-0 z-40">
    <div className="flex items-center">
      <img src={logo} className="h-32 mt-3" alt="Logo" />
    </div>
    <div className="flex items-center space-x-4 mr-4 ">
    <Link href="#"
  activeClass="active"
  to="giris"
  spy={true}
  smooth={true}
  offset={-70} // Header'ın yüksekliği kadar bir negatif offset ayarlayabilirsiniz.
  duration={500}
  onSetActive={handleSetActive}
  className="font-bold hidden xl:flex"
>
  Giriş
</Link>

  <Link href="#" className="font-bold hidden xl:flex"
  activeClass="active" 
  to="kampanya" 
  spy={true} 
  smooth={true} 
  offset={50} 
  duration={500} 
  onSetActive={handleSetActive}
  >Kampanya</Link>
  <Link href="#" className="font-bold hidden xl:flex"
  activeClass="active" 
  to="odeme" 
  spy={true} 
  smooth={true} 
  offset={50} 
  duration={500} 
  onSetActive={handleSetActive}
  >Ödeme</Link>
  <Link href="#" className="font-bold hidden xl:flex"
  activeClass="active" 
  to="iletisim" 
  spy={true} 
  smooth={true} 
  offset={50} 
  duration={500} 
  onSetActive={handleSetActive}
  >İletişim</Link>
  <div className="flex items-center bg-lacivert rounded-lg p-3 text-white font-medium">
    <IoMdCall className="mr-2" />
    <span>0(850)259 1556</span>
  </div>
</div>

  </div>
  
  )
}

export default Header;
