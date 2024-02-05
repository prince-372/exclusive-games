import React from "react";
import Secondarybtn from "./Secondarybtn";
import { ButtonBottom2 } from "./Icones";

const Hero = () => {
  return (
    <div className=" max-w-[1140px] mx-auto px-3 pt-[140px] pb-[222px]">
      <h2 className=" text-[72px] font-normal leading-[86.4px] text-white max-w-[543px] mx-auto font-Anton">
        Exclusive Games. Pasión por ganar
      </h2>
      <p className=" text-base leading-[25.6px] font-medium font-Inter text-center text-[#CECFD1] max-w-[727px] mx-auto pt-4">
        En Exclusive Games somos un equipo apasionado de personas dedicados al
        desarrollo de multiplataformas para juegos de azar. A lo largo de
        nuestra vida consumimos todo tipo de juegos hasta que un día decidimos
        crear los propios.
      </p>
      <div className=" relative flex justify-center pt-10" >
        <Secondarybtn name="Empezar"/>
        <span className=" absolute left-[42%] -bottom-2"><ButtonBottom2/></span>
      </div>
    </div>
  );
};

export default Hero;
