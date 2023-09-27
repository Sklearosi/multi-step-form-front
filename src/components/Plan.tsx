import { useState } from "react"

const Plan = () => {

    const [toggle, setToggle] = useState<boolean>(true)

  return (
    <div>
      <div className=" w-11/12 m-auto bg-white shadow-conteinerShadow rounded-xl -mt-10 pb-1">
        <div className=" w-[90%] m-auto ">
          <div className=" pt-5">
            <p className=" font-[700] text-[#022959] text-[24px] ">
              Select your plan
            </p>
            <p className=" font-[400]  text-[#9699AA] text-[16px] ">
              You have the option of monthly or yearly billing.
            </p>
          </div>
          <div className=" w-[85%] m-auto mt-5 grid gap-5">
            <div className={` flex w-full h-[77px] items-center border border-[#D6D9E6] bg-white rounded-lg pl-3 cursor-pointer`}>
                <img src="/assets/icon-arcade.svg" alt="" />
                <div className=" ml-4 grid gap-1">
                    <p className=" font-[500] text-[16px] text-[#022959] ">Arcade</p>
                    <p className=" font-[400] text-[14px] text-[#9699AA] ">$9/mo</p>
                </div>
            </div>
            <div className={` flex w-full h-[77px] items-center border border-[#D6D9E6] bg-white rounded-lg pl-3 cursor-pointer`}>
                <img src="/assets/icon-arcade.svg" alt="" />
                <div className=" ml-4 grid gap-1">
                    <p className=" font-[500] text-[16px] text-[#022959] ">Advanced</p>
                    <p className=" font-[400] text-[14px] text-[#9699AA] ">$12/mo</p>
                </div>
            </div>
            <div className={` flex w-full h-[77px] items-center border border-[#D6D9E6] bg-white rounded-lg pl-3 cursor-pointer`}>
                <img src="/assets/icon-arcade.svg" alt="" />
                <div className=" ml-4 grid gap-1">
                    <p className=" font-[500] text-[16px] text-[#022959] ">Pro</p>
                    <p className=" font-[400] text-[14px] text-[#9699AA] ">$15/mo</p>
                </div>
            </div>
          </div>
          <div className=" mb-10 w-[85%] h-[48px] flex justify-center items-center bg-[#F8F9FF] m-auto rounded-lg mt-5">
            <div className=" w-[183px] h-[21px] flex justify-between items-center  ">
                <p className={` transition-all duration-300  font-[500] text-[14px] ${toggle ? "text-[#022959]" : "text-[#9699AA]"} `}>Monthly</p>
                <label className=" bg-[#022959] flex items-center w-[38px] h-[20px] rounded-xl cursor-pointer " htmlFor="toggle">
                    <div className={` transition-all duration-300  rounded-full w-3 h-3 bg-white ${toggle ? "ml-[3px]" : "ml-[23px]"} `}></div>
                </label>
                <input onChange={() => {
                    setToggle(!toggle)
                }} className="hidden" id="toggle" type="checkbox" />
                <p className={` transition-all duration-300 font-[500] text-[14px] ${!toggle ? "text-[#022959]" : "text-[#9699AA]"} `}>Yearly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
