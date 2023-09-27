import { Link } from "react-router-dom"
interface PlanType {
  planType: string;
  toggle: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  price: Price;
  isChecked1:boolean;
  isChecked2:boolean;
  isChecked3:boolean;
}

import { Price } from "../types/priceTypes";

const Finishing: React.FC<PlanType> = ({planType, toggle, setStep, price, isChecked1, isChecked2, isChecked3}) => {
    return(
        <div className="w-11/12 bg-white rounded-xl shadow-containerShadow m-auto -mt-24 mb-0">
            <div className="pt-5 w-10/12 m-auto">
        <p className="font-[700] text-[#022959] text-[24px]">Pick add-ons</p>
        <p className="font-[400] text-[#9699AA] text-[16px]">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="p-4 w-[85%] m-auto mt-5 bg-[#F8F9FF] rounded-xl">
      
      <div className=" flex justify-between items-center border-b border-[#9699AA] border-opacity-60 pb-4 mb-5">
        <div className="grid gap-[2px]">
      <p className=" text-[#022959] text-[14px] font-[500] ">{planType} ({toggle ? "Monthly" : "Yearly"})</p>
        <Link onClick={() => {
        setStep(2)
      }} className=" underline " to="/step2">Change</Link>
      </div>
      {planType === "Arcade" ? <p className=" text-[#022959] text-[14px] font-[700] ">${price.arcade}/mo</p> : planType === "Advanced" ? <p className=" text-[#022959] text-[14px] font-[700] ">${price.advanced}/mo</p> : planType === "Pro" ? <p className=" text-[#022959] text-[14px] font-[700] ">${price.pro}/mo</p> : null}
      </div>

      <div className=" grid gap-5">
        {!isChecked1 ? <div className=" flex justify-between items-center"><p className=" text-[#9699AA] text-[14px] font-[400] ">Online services</p><p className=" text-[#022959] text-[14px] font-[400] ">+$1/mo</p></div> : null}
        {!isChecked2 ? <div className=" flex justify-between items-center"><p className=" text-[#9699AA] text-[14px] font-[400] ">Larger storage</p><p className=" text-[#022959] text-[14px] font-[400] ">+$2/mo</p></div> : null}
        {!isChecked3 ? <div className=" flex justify-between items-center"><p className=" text-[#9699AA] text-[14px] font-[400] ">Customizable profile</p><p className=" text-[#022959] text-[14px] font-[400] ">+$3/mo</p></div> : null}
      </div>
      

      </div>
      
      <div className=" w-[75%] m-auto mt-5 flex justify-between items-center pb-6">
        <p className=" text-[#9699AA] font-[400] text-14px ">Total ({!toggle ? "per year" : "per month"})</p>
        <p className=" text-[#483EFF] text-[16px] font-[700] ">
          {planType === "Pro" ? price.pro + (!isChecked1 && isChecked2 && isChecked3  ? 1 : !isChecked1 && !isChecked2 && isChecked3 ? 3 : !isChecked1 && !isChecked2 && !isChecked3 ? 6 : isChecked1 && !isChecked2 && !isChecked3  ? 5 : !isChecked1 && isChecked2 && !isChecked3  ? 4 : 0) : ""}
          {planType === "Advanced" ? price.advanced + (!isChecked1 && isChecked2 && isChecked3  ? 1 : !isChecked1 && !isChecked2 && isChecked3 ? 3 : !isChecked1 && !isChecked2 && !isChecked3 ? 6 : isChecked1 && !isChecked2 && !isChecked3  ? 5 : !isChecked1 && isChecked2 && !isChecked3  ? 4 : 0) : ""}
          {planType === "Arcade" ? price.arcade + (!isChecked1 && isChecked2 && isChecked3  ? 1 : !isChecked1 && !isChecked2 && isChecked3 ? 3 : !isChecked1 && !isChecked2 && !isChecked3 ? 6 : isChecked1 && !isChecked2 && !isChecked3  ? 5 : !isChecked1 && isChecked2 && !isChecked3  ? 4 : 0) : ""}
          
        </p>
      </div>
        </div>
    )
}

export default Finishing;