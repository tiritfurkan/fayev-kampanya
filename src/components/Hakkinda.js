import React from 'react'

const Hakkinda = () => {
  return (
    <div className="h-full container mx-auto p-4">
        <div className=" sm:w-[730px] w-full">
            <h1 className=" font-bold text-5xl mt-40">Fayev Hakkında</h1>
            <p className=" font-normal text-lg mt-10 text-gray-700">FAYEV, yapı sektöründe benzersiz bir iz bırakma vizyonuyla yola çıkan bir markadır. İnovasyon ve mükemmeliyetçilik anlayışıyla, geleneksel yapı malzemelerini modern bir yaklaşımla sentezleyerek, konut üretiminde çığır açan bir rol üstlenmektedir. Her bir projede estetik ve fonksiyonelliği bir araya getiren FAYEV, kullanıcılarına sadece bir ev değil, bir yaşam tarzı sunmayı hedeflemektedir.</p>
            
        </div>
        <div className="border-b border-gray-500 mt-20 container mx-auto" style={{ borderColor: "rgba(169, 169, 169, 0.5)" }}></div>

        <div className="grid sm:grid-cols-4 grid-cols-2 justify-center items-center gap-4  mt-20">
            
            <div className="flex flex-col  sm:p-4 p-2">
                <h1 className="font-bold text-lg">Güven</h1>
                <p>Sağlamlığıyla güven veren yapı malzemeleri ve kaliteli üretim anlayışıyla her zaman yanınızda.</p>
            </div>
            <div className="flex flex-col sm:p-4 p-2">
                <h1 className="font-bold text-lg">Sağlam</h1>
                <p>Sağlamlık ve dayanıklılığın mükemmel bir uyumunu sunar, her detayı özenle tasarlanmıştır.</p>
            </div>
            <div className="flex flex-col sm:p-4 p-2">
                <h1 className="font-bold text-lg">Kalite</h1>
                <p>Kalitede sınır tanımayan bir yaklaşımla her aşamada üstün kalite standartlarına odaklanır.</p>
            </div>
            <div className="flex flex-col sm:p-4 p-2">
                <h1 className="font-bold text-lg">Tecrübe</h1>
                <p>Uzun yıllara dayanan deneyimiyle sektörde güvenilir bir isimdir, her projede sağlam bir tecrübe sunar.</p>
            </div>
        </div>



    </div>
  )
}

export default Hakkinda