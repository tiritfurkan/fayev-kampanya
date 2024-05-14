import React from 'react'
import logo from '../pic/fayevlogobeyaz.svg';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-lacivert">
        <div className="container mx-auto grid sm:grid-cols-3 gap-4 items-center mt-8">

                    <div className="sm:col-span-1">
                    <img src={logo} className="h-32 mt-3 " alt="Logo" />
                    </div>

                    <div className="sm:col-span-1 text-center text-white font-semibold">
                    <nav>
                        <div className="flex container justify-center">
                        <a className="sm:mx-4 mx-1" href='#'>Modeller</a>
                        <a className="sm:mx-4 mx-1">Hakkımızda</a>
                        <a className="sm:mx-4 mx-1">S.S.S</a>
                        <a className="sm:mx-4 mx-1">Referanslar</a>
                        </div>
                    </nav>
                    </div>

                    <div className="sm:col-span-1 sm:text-right text-white font-semibold text-center">
                   
                    <p>Telefon: 0 850 259 15 56</p>
                    </div>

        </div>
        <div className="mt-12 mx-auto container flex items-center justify-center pb-8">
        <img src="./pic/345logoW.webp" alt="Görsel" className="h-[30px] " />
        <p className="ml-2 text-white font-bold">made with</p><FaHeart className="ml-2 text-red-600" />
        </div>
    </div>
  )
}

export default Footer