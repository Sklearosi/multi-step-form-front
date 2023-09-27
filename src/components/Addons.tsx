import { AddonType } from "../types/priceTypes";


const Addons = ({
  isChecked1,
  setIsChecked1,
  isChecked2,
  setIsChecked2,
  isChecked3,
  setIsChecked3,
  addonPrice,
  toggle,
}: {
  isChecked1: boolean;
  setIsChecked1: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked2: boolean;
  setIsChecked2: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked3: boolean;
  setIsChecked3: React.Dispatch<React.SetStateAction<boolean>>;
  addonPrice:AddonType;
  toggle:boolean;
}) => {
  

  return (
    <div className="w-11/12 bg-white rounded-xl shadow-containerShadow m-auto -mt-24 mb-0">
      <div className="pt-5 w-10/12 m-auto">
        <p className="font-[700] text-[#022959] text-[24px]">Pick add-ons</p>
        <p className="font-[400] text-[#9699AA] text-[16px]">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="w-10/12 m-auto mt-5 grid gap-5 pb-10">
       
        <div
          className={`h-[62px] rounded-md flex justify-evenly items-center ${
            !isChecked1
              ? "bg-[#F8F9FF] border border-[#483EFF]"
              : "bg-white border border-[#D6D9E6]"
          }`}
        >
          <label
            className={` cursor-pointer w-5 h-5 flex rounded-[3px] justify-center items-center ${
              !isChecked1 ? "bg-[#483EFF]" : "border border-[#D6D9E6]"
            }`}
            htmlFor="checked1"
          >
            {!isChecked1 ? (
              <img src="/assets/icon-checkmark.svg" alt="" />
            ) : null}
          </label>
          <input
            onChange={() => {
              setIsChecked1((prev) => !prev);
            }}
            className="hidden"
            type="checkbox"
            name=""
            id="checked1"
          />
          <div>
            <p className="font-[700] text-[#022959] text-[12px]">
              Online service
            </p>
            <p className="font-[400] text-[12px] text-[#9699AA]">
              Extra 1TB of cloud save
            </p>
          </div>
          <p className="font-[400] text-[12px] text-[#483EFF]">+${addonPrice.online}/{toggle ? "mo" : "yr"}</p>
        </div>

       
        <div
          className={`h-[62px] rounded-md flex justify-evenly items-center ${
            !isChecked2
              ? "bg-[#F8F9FF] border border-[#483EFF]"
              : "bg-white border border-[#D6D9E6]"
          }`}
        >
          <label
            className={`cursor-pointer w-5 h-5 flex rounded-[3px] justify-center items-center ${
              !isChecked2 ? "bg-[#483EFF]" : "border border-[#D6D9E6]"
            }`}
            htmlFor="checked2"
          >
            {!isChecked2 ? (
              <img src="/assets/icon-checkmark.svg" alt="" />
            ) : null}
          </label>
          <input
            onChange={() => {
              setIsChecked2((prev) => !prev);
            }}
            className="hidden"
            type="checkbox"
            name=""
            id="checked2"
          />
          <div>
            <p className="font-[700] text-[#022959] text-[12px]">
              Another Add-on
            </p>
            <p className="font-[400] text-[12px] text-[#9699AA]">
              Description of add-on 2
            </p>
          </div>
          <p className="font-[400] text-[12px] text-[#483EFF]">+${addonPrice.another}/{toggle ? "mo" : "yr"}</p>
        </div>

     
        <div
          className={`h-[62px] rounded-md flex justify-evenly items-center ${
            !isChecked3
              ? "bg-[#F8F9FF] border border-[#483EFF]"
              : "bg-white border border-[#D6D9E6]"
          }`}
        >
          <label
            className={`cursor-pointer w-5 h-5 flex rounded-[3px] justify-center items-center ${
              !isChecked3 ? "bg-[#483EFF]" : "border border-[#D6D9E6]"
            }`}
            htmlFor="checked3"
          >
            {!isChecked3 ? (
              <img src="/assets/icon-checkmark.svg" alt="" />
            ) : null}
          </label>
          <input
            onChange={() => {
              setIsChecked3((prev) => !prev);
            }}
            className="hidden"
            type="checkbox"
            name=""
            id="checked3"
          />
          <div>
            <p className="font-[700] text-[#022959] text-[12px]">
              Third Add-on
            </p>
            <p className="font-[400] text-[12px] text-[#9699AA]">
              Description of add-on 3
            </p>
          </div>
          <p className="font-[400] text-[12px] text-[#483EFF]">+${addonPrice.third}/{toggle ? "mo" : "yr"}</p>
        </div>
      </div>
    </div>
  );
};

export default Addons;
