const Secondarybtn = (props) => {
    return (
        <button className={`py-[13px] px-[46px] bg-blue-307 text-black font-Inter font-bold text-base leading-6 rounded-full duration-300 border after: ${props.cstm}`}>{props.name}</button>
    )
}

export default Secondarybtn