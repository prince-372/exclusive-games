import React from 'react'
import spin from '../assets/image/spin.webp'
import { Doller, Light, Persons } from './Icones'

const Elegirnos = () => {
    return (
        <>
            <div className='bg-[#00141B]'>
                <div className='max-w-[1140px] mx-auto px-3 '>
                    <div className='grid lg:grid-cols-2 pt-12 sm:pt-[100px] gap-12'>
                        <div className=' px-3 flex justify-center items-center'>
                            <img src={spin} alt="spin" className='w-full' />
                        </div>
                        <div className=' flex items-center flex-col lg:items-start justify-center'>
                            <h2 className=' text-[26px] sm:text-[38px] md:text-[42px] lg:text-[48px] text-white leading-[57.6px] font-normal  max-w-[537px] text-wrap lg:text-nowrap font-Anton'>Más razones para elegirnos</h2>
                            <div className='flex mt-4 sm:mt-[24px]  justify-center items-center sm:w-[374px] w-[300px] gap-4 sm:gap-[37px] px-[10px] py-4 sm:px-[24px] sm:py-[24px] bg-transparent border border-[#39825F] border-solid rounded-[16px]'>
                                    <span className='flex justify-center items-center bg-[#0F2F28] h-[68px] w-[68px] rounded-[73px]'>
                                    <Light/>
                                    </span>
                                    <p className='text-[16px] text-white leading-[25.6px] font-medium font-Inter max-w-[157px]'><span className='text-[32px] text-white leading-[41.6px] font-medium font-Anton'>200</span> <br /> Páginas creadas</p>
                                </div>
                                <div className='flex mt-4 sm:mt-[24px] mb-4 md:mb-[24px] justify-center items-center sm:w-[374px] w-[300px] gap-4 sm:gap-[37px] px-[10px] py-4 sm:px-[24px] sm:py-[24px] bg-transparent border border-[#39825F] border-solid rounded-[16px]'>
                                    <span className='flex justify-center items-center bg-[#0F2F28] h-[68px] w-[68px] rounded-[73px]'>
                                    <Persons/>
                                    </span>
                                    <p className='text-[16px] text-white leading-[25.6px] font-medium font-Inter max-w-[157px]'><span className='text-[32px] text-white leading-[41.6px] font-medium font-Anton'>98%</span> <br /> Clientes Satisfechas</p>
                                </div>
                                <div className='flex justify-center items-center sm:w-[374px] w-[300px] gap-4 sm:gap-[37px] px-[10px] py-4 sm:px-[24px] sm:py-[24px] bg-transparent border border-[#39825F] border-solid rounded-[16px]'>
                                    <span className='flex justify-center items-center bg-[#0F2F28] h-[68px] w-[68px] rounded-[73px]'>
                                    <Doller/>
                                    </span>
                                    <p className='text-[16px] text-white leading-[25.6px] font-medium font-Inter max-w-[157px]'><span className='text-[32px] text-white leading-[41.6px] font-medium font-Anton'>200</span> <br />Divisas Disponibles</p>
                                </div>
                        </div>
                    </div>

                </div>
            </div></>
    )
}
export default Elegirnos
