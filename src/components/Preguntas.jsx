import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ButtonBottom2 } from "./Icones";
import Secondarybtn from "./Secondarybtn";

function Icon({ id, open }) {
  return (
    <div className="relative ">
      <svg
        xmlns="http://www.w3.oyg/1700/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="white"
        className={`${
          id === open ? "" : "rotate-90"
        } h-5 w-5   transition-transform`}
      >
        <path
          d="M1.69629 1H19.6963"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <svg
        className="absolute rotate-0 top-[9px]"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="white"
      >
        <path
          d="M1.69629 1H19.6963"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

const Preguntas = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className=" relative overflow-x-clip">
      <div className="w-[484px] max-lg:hidden h-[484px] rounded-full bg-blue-307 absolute top-0 left-[-12%] z-[3] blur-[180px] animate-pulse"></div>
      <div className="max-w-[970px] mx-auto px-3">
        <div className="sm:py-[150px] py-[50px] relative z-[5]">
          <h2 className=" text-5xl font-Anton leading-[120%] font-normal text-center pb-[60px] text-white">
            Preguntas más frecuentes
          </h2>
          <Accordion
            className=" border-[#80898D] border mb-4 rounded-[10px] py-4 px-5"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="font-Anton text-[14px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%] "
            >
              ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis
              plataformas de juegos?
            </AccordionHeader>
            <AccordionBody className="font-inter text-base md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-4 rounded-[10px] py-4 px-5  overflow-hidden"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="font-Anton text-[14px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              {" "}
              ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
            </AccordionHeader>
            <AccordionBody className="font-inter text-base md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-4 rounded-[10px] py-4 px-5 "
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="font-Anton text-[14px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              {" "}
              ¿Cuáles son las opciones de juego disponibles en las versiones
              Silver, Luxury y Platinum?
            </AccordionHeader>
            <AccordionBody className="font-inter text-base md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-4 rounded-[10px] py-4 px-5 "
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="font-Anton text-[14px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
            </AccordionHeader>
            <AccordionBody className="font-inter text-base md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-4 rounded-[10px] py-4 px-5 "
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="font-Anton text-[14px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              ¿Qué métodos de pago aceptan?
            </AccordionHeader>
            <AccordionBody className="font-inter text-base md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-4 rounded-[10px] py-4 px-5 "
            open={open === 6}
            icon={<Icon id={6} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="font-Anton text-[14px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              ¿Puedo probar sus juegos antes de comprometerme?
            </AccordionHeader>
            <AccordionBody className="font-inter text-base md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
        </div>
        <div className="w-full rounded-2xl bg-sec8bg bg-no-repeat border border-[#828F92] py-[100px] sm:mb-[150px] mb-[70px]">
          <h2 className=" text-[32px] font-Anton font-normal leading-[130%] text-white text-center pb-10">
            Lanza tu propia plataforma en sólo 2 semanas
          </h2>
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative z-[3]">
                  <Secondarybtn name="Leer más" />
              </div>
              <span className="absolute z-0 -left-1 -bottom-1">
                <ButtonBottom2 />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
