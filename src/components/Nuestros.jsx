import img1 from "../assets/image/jetx.webp";
import img2 from "../assets/image/joker.webp";
import img3 from "../assets/image/panda.webp";
import img4 from "../assets/image/lucky.webp";
import img5 from "../assets/image/summer.webp";
import img6 from "../assets/image/casino.webp";
import Primarybtn from "./Primarybtn";
import {
  Arrow,
  Arrow2,
  Bulb,
  ButtonBottom,
  ButtonBottom2,
  Person,
  Sating,
} from "./Icones";
import Secondarybtn from "./Secondarybtn";
const Nuestros = () => {
  const slotsData = [
    {
      id: 1,
      svg: <Bulb />,
      title: "Inteligencia",
      para: "Comprendemos a la perfección los gustos de las personas y el mundo del gaming.",
    },
    {
      id: 2,
      svg: <Person />,
      title: "Proactividad",
      para: "Somos creadores de cambios que exploran nuevas formas de entretenimiento.",
    },
    {
      id: 3,
      svg: <Sating />,
      title: "Innovación",
      para: "Pensamos fuera de la caja para estar siempre un paso adelante.",
    },
  ];
  const slotsDataSecond = [
    { id: 1, img: img1, title: "Inteligencia" },
    { id: 2, img: img2, title: "Proactividad" },
    { id: 3, img: img3, title: "Innovación" },
    { id: 4, img: img4, title: "Innovación" },
    { id: 5, img: img5, title: "Innovación" },
    { id: 6, img: img6, title: "Innovación" },
  ];
  return (
    <div className="bg-no-repeat lg:bg-sec3bg lg:bg-transparent bg-white w-full bg-cover pt-[100px] sm:pt-[243px] pb-[70px] sm:pb-[283px]">
      <div className=" px-3 mx-auto flex flex-col max-w-[1140px] justify-between">
        <h2 className="text-4xl sm:text-5xl font-normal font-Anton leading-[57px] text-[#00141B] text-center">
          Nuestros Atributos de Marca
        </h2>
        <div className="max-lg:grid lg:grid-cols-3 mt-[20px] sm:my-[60px] justify-center gap-[17px] lg:justify-between inline-flex items-center relative">
          {slotsData.map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full max-w-[245px]"
            >
              <span className="w-[100px] h-[100px] rounded-[73px] bg-[#F5FFF5] flex justify-center items-center ">
                {items.svg}
              </span>
              <h2 className="text-[#00141B] font-anton font-normal text-xl sm:leading-[26px] text-center mt-2 sm:mt-4">
                {items.title}
              </h2>
              <p className="text-[#334349] font-Inter font-medium text-base  sm:leading-[26px] text-center mt-2 sm:mt-4">
                {items.para}
              </p>
            </div>
          ))}
          <span className="absolute lg:top-[18px] max-[374px]:hidden top-[22%] left-[50%] max-lg:rotate-90 lg:left-[19%]">
            <Arrow />
          </span>
          <span className="absolute lg:top-[76px] max-[374px]:hidden max-lg:rotate-90 right-[50%] top-[67%] lg:right-[18%]">
            <Arrow2 />
          </span>
        </div>
      </div>
      <div className="px-3 mx-auto flex flex-col max-w-[1140px] mt-[90px]">
        <h2 className="text-4xl sm:text-5xl font-normal font-Anton leading-[57px] text-[#00141B] text-center">
          Slots{" "}
        </h2>
        <p className="text-[#00141B] font-Inter font-medium text-base opacity-80 leading-[26px] text-center mt-4 max-w-[904px] mx-auto">
          En Exclusive Games, ofrecemos una selección de más de 600 juegos de
          los principales desarrolladores, como Aristocrat, Amatic, EGT,
          Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
          incansablemente para innovar y ampliar nuestra oferta de experiencias,
          garantizando la máxima seguridad con operaciones protegidas por
          cifrado SSL de 256 bits.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mt-[60px] relative gap-6">
          {slotsDataSecond.map((listing, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-full duration-300 group"
            >
              <img
                className="w-full rounded-lg"
                src={listing.img}
                alt={listing.title}
              />
              <div className="absolute flex items-center justify-center w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                <div className="relative">
                  <Primarybtn text="Jugar" />
                  <span className="absolute -left-1 -bottom-1">
                    <ButtonBottom />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative mx-auto mt-5 sm:mt-7 md:mt-10">
          <Secondarybtn
            cstm="bg-gradient-to-br to-[#51C8EF] from-[#7AF57A]  border-[0px] !text-black"
            name="Mostrar más"
          />
          <span className="absolute -left-1 -bottom-1">
            <ButtonBottom2 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nuestros;
