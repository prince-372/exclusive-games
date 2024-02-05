import React from 'react'
import casino from '../assets/image/board-casino.webp'
import { ButtonBottom, Correct } from './Icones'
import Primarybtn from './Primarybtn'

const Ofertas = () => {
    return (
        <div>
            <div className='bg-[#00141B]'>
                <div className='max-w-[1140px] mx-auto px-3'>
                    <h2 className='text-[48px] text-white leading-[57.6px] font-Anton font-normal text-center pt-[150px]'>Nuestras ofertas</h2>
                    <p className='text-[16px] font-medium font-Inter text-white leading-[25.6px] text-center mb-[60px]'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>


                    <div className='max-w-[1140px] bg-[#062024] border-[0.5px] border-solid border-[#FFFFFF80]'>
                        <div className='grid lg:grid-cols-2 px-3 mt-[57px]'>
                            <div className=' col-span-1 flex justify-center'>
                                <img  src={casino} alt="" className='mt-[30px]' />
                            </div>
                            <div className=' col-span-1 flex flex-col justify-center mt-6'>
                                <h2 className='text-[32px] text-white font-normal leading-[41.6px] font-Anton'>Silver</h2>
                                <p className='text-[16px] text-[#CDD2D3] font-Inter font-medium max-w-[401px] pb-[32px] pt-[16px]'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                                <h2 className='text-[48px] text-white font-normal font-Anton leading-[57.6px]'>$5000</h2>
                                <div>
                                    <span className='flex gap-[8px] pb-[12px] items-center pt-[16px]'>
                                        <Correct/>
                                        <p className='text-[16px] text-[#CDD2D3] font-Inter font-medium max-w-[401px]'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                    </span>
                                    <span className='flex gap-[8px] py-[12px] items-center '>
                                    <Correct/>
                                        <p className='text-[16px] text-[#CDD2D3] font-Inter font-medium max-w-[401px]'>Control de RTP (controlás qué porcentaje pagar)</p>
                                    </span>
                                    <span className='flex gap-[8px] items-center py-[12px]'>
                                    <Correct/>
                                        <p className='text-[16px] text-[#CDD2D3] font-Inter font-medium max-w-[401px]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                    </span>
                                    <span className='flex gap-[8px] py-[12px] items-center'>
                                    <Correct/>
                                        <p className='text-[16px] text-[#CDD2D3] font-Inter font-medium max-w-[401px] '>Aplicación para Android y Windows de regalo.</p>
                                    </span>
                                    <span className='flex gap-[8px] items-center'>
                                    <Correct/>
                                        <p className='text-[16px] text-[#CDD2D3] font-Inter font-medium max-w-[401px]'>Tiempo de creación 2 a 3 semanas</p>
                                    </span>
                                </div>
                                <div className='mt-[40px] mb-[28px] relative'>
                                    <Primarybtn text='Comprar ahora' />
                                    <span className="absolute -left-1 -bottom-1"><ButtonBottom/></span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}


export default Ofertas