import React from 'react'

const Kampanya = () => {
  return (
<div className=" w-full" name="kampanya">
  <div className="flex flex-col items-center justify-center">
    <div className="text-center font-extrabold text-4xl mt-40 sm:w-[730px] w-full">
      Mayıs Ayına Özel! Fayev'de 36 Ay Taksit İmkanıyla 1,99 Vade Farkı Sizi Bekliyor!
    </div>
  </div>
  <div className="sm:flex sm:justify-center sm:mt-32 sm:pb-44 mt-16 p-9">
    <div className="sm:w-[350px] sm:mr-20 mr-4 w-full">
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="font-bold text-xl text-center">Uygun Taksitlerle Hemen Arsanıza Evinizi Yaptırın</h1>
            <p className="font-light text-center mt-3">Fayev'in mayıs ayına özel kampanyasıyla hayalinizdeki ürünlere hemen sahip olun! 36 ay taksit seçenekleriyle özel %1,99 vade farkıyla alışveriş yapmak hiç bu kadar kolay olmamıştı.</p>
        </div>
    </div>
    <div className="sm:w-[350px] sm:ml-20 ml-2 w-full mt-16">
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="font-bold text-xl text-center">Ücretsiz Keşif Yaptırarak Hayalinizdeki Eve Sahip Olun</h1>
            <p className="font-light text-center mt-3">Profesyonel danışmanlarımız, arsanızı inceleyerek size tüm süreç hakkında detaylı bilgi verecekler. Ücretsiz keşif imkanıyla hayallerinizdeki ürünlere sahip olmak artık çok kolay!</p>
        </div>
    </div>
</div>

</div>


  
  )
}

export default Kampanya