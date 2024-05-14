import React from 'react'
import { LuCalendarCheck } from "react-icons/lu";
import { TbRosetteDiscount } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";



const Odeme = () => {

 
  return (
    <div className="pt-24 pb-24 relative flex flex-col justify-center items-center z-10" name="odeme" style={{ backgroundImage: "url(./pic/villa-arkaplan.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
  <div className="absolute inset-0 bg-black opacity-70"></div>
  <div className="flex flex-col justify-center items-center z-50">
    <h1 className="text-white text-4xl font-black mb-4 text-center">Ödeme Kolaylığı Fayev'de</h1>
    <p className="text-white text-s font-light text-center sm:w-[730px] w-full p-4">Fayev olarak, size özel ödeme kolaylıklarıyla hayallerinizi gerçeğe dönüştürmenize yardımcı oluyoruz. 36 ay taksit imkanıyla ve sadece %1,99 vade farkıyla alışveriş yaparak istediğiniz ürünlere sahip olabilirsiniz. Üstelik ücretsiz keşif hizmetimizle aradığınızı bulmanıza yardımcı oluyoruz.</p>
  </div>
  
  <div className="flex justify-around mt-20 gap-x-4 z-50 flex-wrap">



            <div className="text-white text-lg font-bold text-center w-[350px] border border-gray-600 border-solid rounded-3xl h-[382px] flex flex-col justify-center mt-4">
            <div className="flex justify-center"><LuCalendarCheck size={55}/></div>
                <h2 className="font-bold text-2xl mt-8">36 Ay Taksit</h2>
            <div className="flex justify-center">
                <p className="font-light text-sm mt-4 w-[280px]">Hayallerinizin peşinden koşmak için doğru zaman! Fayev'de 36 ay boyunca özel taksit imkanıyla istediğiniz ürünlere sahip olun, hayatı keyifle yaşayın.</p>
            </div>
          </div>

            <div className="text-white text-lg font-bold text-center w-[350px] border border-gray-600 border-solid rounded-3xl h-[382px] flex flex-col justify-center mt-4">
            <div className="flex justify-center"><TbRosetteDiscount size={55}/></div>
                <h2 className="font-bold text-2xl mt-8">1,99 Vade Farkı</h2>
            <div className="flex justify-center">
                <p className="font-light text-sm mt-4 w-[280px]">Hayalinizdeki evde yaşarken ödeme kolaylığı Fayev'de! Sadece %1,99 vade farkıyla 36 ay taksit imkanıyla arsanıze ev yaptırın, ödemeye devam ederken evin tadını çıkarın.</p>
            </div>
            </div>

            <div className="text-white text-lg font-bold text-center w-[350px] border border-gray-600 border-solid rounded-3xl h-[382px] flex flex-col justify-center mt-4">
            <div className="flex justify-center"><FiUsers size={55}/></div>
                <h2 className="font-bold text-2xl mt-8">Kişiye Özel Ödeme Planı</h2>
            <div className="flex justify-center">
                <p className="font-light text-sm mt-4 w-[280px]">Hayalinizdeki eve sahip olmanızı kolaylaştıran kişiye özel ödeme planları Fayev'de! İsterseniz ara ödemelerle size özel bir ödeme planı oluşturabiliriz.</p>
            </div>
            </div>

            
         
          

  
  </div>

  
</div>




  )
}

export default Odeme