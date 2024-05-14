import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";


const Iletisim = () => {
  return (
    <div className="grid sm:grid-cols-3 justify-center gap-4  mt-20 mx-auto container">
        <div className="flex flex-col  sm:p-3">
                <h1 className="font-bold text-lg tracking-widest text-gray-400">ADRES</h1>
                <p className="mt-9 w-[300px]" >Yakuplu Mahallesi Hürriyet Bulvarı Bina No:1 Skyport Rezidans Kat: 13 Daire: 135, Beylikdüzü / İstanbul</p>
            </div>

            <div className="flex flex-col  sm:p-3 tracking-widest">
                <h1 className="font-bold text-lg tracking-widest text-gray-400 ">TELEFON</h1>
                <p className="mt-9 ">0 850 259 15 56</p>
            </div>

            <div className="flex flex-col  sm:p-3 tracking-widest pb-24">
                <h1 className="font-bold text-lg tracking-widest text-gray-400 ">SOSYAL MEDYA</h1>
                <div className="mt-9 text-gray-400 flex" >
                <a href='https://www.instagram.com/fayev_konut/' className="hover:text-lacivert">  <FaInstagram size={30} /></a>
                <a href='https://www.instagram.com/fayev_konut/' className="hover:text-lacivert">  <AiOutlineFacebook size={30} /></a>
                </div>
            </div>

    </div>
  )
}

export default Iletisim