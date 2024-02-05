import React from 'react'
import giros from "../assets/image/giros.webp"
import todos from "../assets/image/todos.webp"
import happy from "../assets/image/happy.webp"
import Primarybtn from './Primarybtn'
import { ButtonBottom } from './Icones'

const Ellos = () => {
  return (
    <div className=' max-w-[1140px] px-3 mx-auto'>
        <h2 className='text-[48px] text-center text-white leading-[57.6px] font-normal font-Anton'>Ellos eligieron apostar con nosotros</h2>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-[60px]'>
        <div className=' relative w-full duration-300 group items-center'>
     <img className='w-full rounded-lg' src={giros} alt="ezugi" />
     <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                        <div className="relative"><Primarybtn text="Rcasinovip" />
                                            <span className="absolute -left-1 -bottom-1"><ButtonBottom/></span>
                                        </div>
                                    </div>
 </div>
        <div className=' relative w-full duration-300 group items-center'>
     <img className='w-full rounded-lg' src={todos} alt="ezugi" />
     <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                        <div className="relative"><Primarybtn text="Rcasinovip" />
                                            <span className="absolute -left-1 -bottom-1"><ButtonBottom/></span>
                                        </div>
                                    </div>
 </div>
        <div className=' relative w-full duration-300 group items-center'>
     <img className='w-full rounded-lg' src={happy} alt="ezugi" />
     <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                        <div className="relative"><Primarybtn text="Rcasinovip" />
                                            <span className="absolute -left-1 -bottom-1"><ButtonBottom/></span>
                                        </div>
                                    </div>
 </div>
        </div>
        <h2 className=' text-base font-semibold font-Inter leading-[25px] text-center max-w-[643px] pt-7 text-white mx-auto'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
Ahora, la próxima apuesta está en tus manos.
Elige ganar. Elige exclusive game.</h2>
    </div>
  )
}

export default Ellos