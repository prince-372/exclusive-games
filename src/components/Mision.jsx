import React from "react";
import poker from "../assets/image/poker.webp";
import aviator from "../assets/image/avation.webp";

const Mision = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className=" max-w-[1140px] px-3 mx-auto ">
        <div className="w-[484px] max-lg:hidden h-[484px] rounded-full bg-blue-307 absolute bottom-[29%] left-[-10%] z-[3] blur-[180px] animate-pulse"></div>
        <div className="w-[484px] max-lg:hidden h-[484px] rounded-full bg-blue-307 absolute bottom-[-40%] right-[-10%] z-[3] blur-[180px] animate-pulse"></div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-16 pt-[74px] pb-[100px]">
          <div className=" flex justify-center flex-col items-center lg:items-start">
            <img className=" w-[full] z-10" src={poker} alt="poker" />
            <h2 className=" text-[48px] font-normal font-Anton text-white leading-[57px] pt-14 text-center lg:text-start">
              Nuestra Visión
            </h2>
            <p className=" text-base font-Inter font-medium leading-[25px] max-w-[444px] text-[#CCD0D1] text-center lg:text-start">
              Nuestra visión es ser líderes indiscutibles en la industria de los
              juegos de azar y llevar nuestra pasión por el entretenimiento más
              allá de las fronteras. Imagina un mundo donde la emoción y la
              diversión no tengan límites, y ese es el mundo que queremos crear
              contigo.
            </p>
            <p className=" pt-6 text-base leading-[25px] font-bold font-Inter text-[#7AF57A]">
              Aprende más {"-->"}
            </p>
          </div>
          <div className=" flex justify-center flex-col items-center lg:items-start">
            <h2 className=" text-[48px] font-normal font-Anton text-white leading-[57px] text-center lg:text-start">
              Nuestra Misión
            </h2>
            <p className=" text-base font-Inter font-medium leading-[25px] max-w-[444px] text-[#CCD0D1] text-center lg:text-start">
              Nuestra misión es simple pero poderosa: proporcionarte la más
              amplia gama de soluciones de entretenimiento de alta calidad y
              rentabilidad. Estamos comprometidos a elevar tus expectativas y
              brindarte experiencias inigualables.
            </p>
            <p className=" pt-6 text-base leading-[25px] font-bold font-Inter text-[#7AF57A]">
              Aprende más {"-->"}
            </p>
            <div className=" pt-14">
              <img src={aviator} alt="aviator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mision;
