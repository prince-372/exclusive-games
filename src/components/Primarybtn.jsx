const Primarybtn = (props) => {
    return (
        <button className={`py-[13px] px-[46px] bg-transparent font-Inter font-bold text-base leading-6 rounded-full relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-br to-[#51C8EF] from-[#7AF57A]  before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:border-transparent border after: ${props.cstm}`}>{props.text}</button>
    )
}

export default Primarybtn