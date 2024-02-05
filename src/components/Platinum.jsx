import React from "react";
import Group_img from "../assets/image/games-casino.webp";
import { ButtonBottom, Correct } from "./Icones";
import Primarybtn from "./Primarybtn";

const Platinum = () => {
  return (
    <div className="">
      <div className="bg-[#00141B] relative z-[1]">
        <span className="w-[484px] hidden sm:block absolute opacity-50 left-[-314px] top-[-100px] blur-[150px] z-[-1] h-[484px] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)]"></span>
        <div className="max-w-[1140px] mx-auto px-3 sm:pt-[100px] pb-[110px]">
          <div className="bg-[#062024] border-[0.5px] border-solid border-[#FFFFFF80] relative z-[1] overflow-hidden">
            <span className="w-[162px] hidden sm:block absolute right-[110px] top-[110px] blur-[60px] z-[-1] h-[162px] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)]"></span>
            <div className="grid lg:grid-cols-2  mt-[78px] mb-[78px] ">
              <div className=" col-span-1 sm:ps-[50px] ps-0 px-3 flex flex-col items-center lg:items-start">
                <h2 className="text-[32px] mt-[43px]  text-white leading-[41.6px] font-Anton font-normal ">
                  Platinum
                </h2>
                <p className="text-[16px] mt-[16px] text-[#CDD2D3] font-medium font-Inter leading-[25.6px] max-w-[364px] text-center lg:text-start">
                  Diseño totalmente personalizado. Contáctanos para un
                  presupuesto.
                </p>
                <h2 className="text-[48px] mt-[32px] text-white leading-[57.6px] font-normal font-Anton text-center lg:text-start">
                  Consultar precio
                </h2>
                <span className="flex gap-[8px] mt-[16px] items-center">
                  <Correct />
                  <p className="text-[16px] text-[#CDD2D3] font-Inter font-medium">
                    Personalizable
                  </p>
                </span>
                <div className="mt-[40px] relative">
                  <Primarybtn text="Comprar ahora" />
                  <span className="absolute -left-1 -bottom-1">
                    <ButtonBottom />
                  </span>
                </div>
              </div>
              <div className="col-span-1 px-3 lg:pe-[40px] flex justify-center">
                <img
                  src={Group_img}
                  alt="Group_img"
                  className=" w-full lg:w-[602px] lg:h-[419px] mt-7 lg:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
