import React from "react";
import jackport from "./assets/image/jackport.webp";
import { ButtonBottom, Correct } from "./components/Icones";
import ezugi from "./assets/image/ezugi.webp";
import roulette from "./assets/image/roulette.webp";
import live from "./assets/image/live.webp";
import Primarybtn from "./components/Primarybtn";
const Jackport = () => {
  return (
    <div className=" relative overflow-x-clip">
      <div className="w-[484px] max-lg:hidden h-[484px] rounded-full bg-blue-307 absolute top-[-12%] left-[-10%] z-[3] blur-[180px] animate-pulse"></div>
      <div className="w-[484px] max-lg:hidden h-[484px] rounded-full bg-blue-307 absolute bottom-0 right-[-12%] z-[3] blur-[180px] animate-pulse"></div>
      <div className=" max-w-[1140px] px-3 mx-auto pt-[90px] ">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-7 ">
          <div className=" flex flex-col items-center">
            <img className=" z-10" src={jackport} alt="jackport" />
          </div>
          <div className=" flex flex-col items-center">
            <h2 className=" text-[48px] font-Anton font-normal leading-[57.6px] text-white pt-5">
              Potenciando sus elecciones
            </h2>
            <div>
              <p className=" text-base font-medium font-Inter leading-[25.6px] text-[#CDD0D1] pt-4">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              <span className=" flex items-center gap-2 pt-6">
                <Correct />
                <p className="text-base font-medium font-Inter leading-[25.6px] text-[#CDD0D1]">
                  Tecnología HTML5
                </p>
              </span>
              <span className=" flex items-center gap-2 pt-3">
                <Correct />
                <p className="text-base font-medium font-Inter leading-[25.6px] text-[#CDD0D1]">
                  Versión PC y móvil
                </p>
              </span>
              <span className=" flex items-center gap-2 pt-3">
                <Correct />
                <p className="text-base font-medium font-Inter leading-[25.6px] text-[#CDD0D1]">
                  Control de RTP (controlás qué porcentaje pagar)
                </p>
              </span>
              <span className=" flex items-center gap-2 pt-3">
                <Correct />
                <p className="text-base font-medium font-Inter leading-[25.6px] text-[#CDD0D1]">
                  Bonos editables, happy hours, Jackpots, códigos promocionales.
                </p>
              </span>
              <span className=" flex items-center gap-2 pt-3">
                <Correct />
                <p className="text-base font-medium font-Inter leading-[25.6px] text-[#CDD0D1]">
                  Aplicación para android y windows de regalo.
                </p>
              </span>
            </div>
            <p className="text-base font-medium font-Inter leading-[25.6px] text-[#CDD0D1] pt-6">
              Te reintegramos todo lo invertido en fichas en la moneda que
              elijas..
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-[1068px] mx-auto px-3 bg-sec5bg bg-no-repeat min-h-[308px] flex items-center justify-center my-[150px] border border-[#fff] rounded-[16px]">
        <h2 className="sm:text-[48px] text-[30px] font-normal font-Anton leading-[57px] text-center text-white max-w-[520px] mx-auto">
          lanza tu propia plataforma en sólo 2 semanas
        </h2>
      </div>
      <div className=" max-w-[1140px] px-3 mx-auto pb-[100px]">
        <p className="text-[48px] font-normal font-Anton leading-[57px] text-center text-white ">
          Juegos en vivo
        </p>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-[60px] gap-6">
          <div className=" relative w-full duration-300 group items-center">
            <img className="w-full rounded-lg z-10" src={ezugi} alt="ezugi" />
            <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
              <div className="relative">
                <div className=" relative z-[3]">
                  <Primarybtn text="Reproducir ahora" />
                </div>
                <span className="absolute z-0 -left-1 -bottom-1">
                  <ButtonBottom />
                </span>
              </div>
            </div>
          </div>
          <div className=" relative w-full duration-300 group items-center">
            <img
              className="w-full rounded-lg z-10"
              src={roulette}
              alt="ezugi"
            />
            <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
              <div className="relative">
                <div className=" relative z-[3]">
                  <Primarybtn text="Reproducir ahora" />
                </div>
                <span className="absolute z-0 -left-1 -bottom-1">
                  <ButtonBottom />
                </span>
              </div>
            </div>
          </div>
          <div className=" relative w-full duration-300 group items-center">
            <img className="w-full relative rounded-lg z-[1]" src={live} alt="ezugi" />
            <div className="absolute flex items-center justify-center z-[4] top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
              <div className="relative">
                <div className=" relative z-[3]">
                  <Primarybtn text="Reproducir ahora" />
                </div>
                <span className="absolute z-0 -left-1 -bottom-1">
                  <ButtonBottom />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jackport;
