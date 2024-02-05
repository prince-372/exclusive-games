import React from "react";
import Secondarybtn from "./Secondarybtn";
import { ButtonBottom2 } from "./Icones";
import night from "../assets/image/casino-night.webp";

const Casino = () => {
  return (
    <div className=" bg-white  sm:bg-sec6bg lg:bg-transparent min-[1441px]:bg-white bg-no-repeat bg-center bg-cover py-[70px] sm:py-[340px]">
      <div className="max-w-[1140px] px-3 mx-auto ">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-11">
          <div className=" flex flex-col justify-center">
            <h2 className="text-[48px] font-normal font-Anton leading-[57px] text-black">
              Por qué elegirnos
            </h2>
            <p className=" text-base font-medium leading-[25px] font-Inter text-[#334349] pt-4">
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              todo lo invertido en fichas en la moneda que elijas. En Exclusive
              Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              interactivos que más pide la gente. Con Exclusive Games empezás a
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
            <div className=" relative pt-6">
              <div className=" relative z-[3]">
                <Secondarybtn name="Aprende más" />
              </div>
              <span className="absolute z-0 -left-1 -bottom-1">
                <ButtonBottom2 />
              </span>
            </div>
          </div>
          <div>
            <img className=" w-full" src={night} alt="night" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
