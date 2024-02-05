const Primarybtn = (props) => {
  return (
    <button
      className={`py-[13px] px-[46px] bg-transparent font-Inter font-bold text-base leading-6 rounded-full relative overflow-hidden hover:bg-gradient-to-br to-[#51C8EF] from-[#7AF57A] hover:text-black  transition-all duration-300 text-[#fff]  border after: ${props.cstm}`}
    >
      {props.text}
    </button>
  );
};

export default Primarybtn;
