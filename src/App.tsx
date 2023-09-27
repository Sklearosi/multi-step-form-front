import { Routes, Link, Route, useLocation, useNavigate } from "react-router-dom";
import Personal from "./components/Personal";
import { useEffect, useState } from "react";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import Finishing from "./components/Finishing";
import { Price } from "./types/priceTypes";

function App() {
  const [step, setStep] = useState<number>(1);

  const [toggle, setToggle] = useState<boolean>(true)
    const [planType, setPlanType] = useState<string>("arcade")
    const [price, setPrice] = useState<Price>({
        arcade: "$9/mo",
        advanced: "$12/mo",
        pro: "$15/mo"
    })

  const [isChecked1, setIsChecked1] = useState<boolean>(true);
  const [isChecked2, setIsChecked2] = useState<boolean>(true);
  const [isChecked3, setIsChecked3] = useState<boolean>(true);


  const navigate = useNavigate()
  const location:any = useLocation()
  const currentStep = parseInt(location.pathname.replace("/step", ""), 10);

  useEffect(() => {
    navigate(`/step${step}`);
  }, [step, navigate]);

  const goToNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


  return (
    <div className="flex flex-col h-screen bg-[#EFF5FF]">
      <div
        className="h-[200px] w-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/bg-sidebar-mobile.svg)" }}
      >
        <div className="flex justify-center items-center w-full pt-6">
        <ul className="flex w-[180px] justify-between items-center">
            <li
              className={`flex justify-center items-center rounded-full text-[14px] font-[700] w-[33px] h-[33px] ${
                currentStep === 1
                  ? "bg-[#BEE2FD] text-[#022959]"
                  : "bg-transparent text-white border border-white"
              }`}
            >
              1
            </li>
            <li
              className={`flex justify-center items-center rounded-full text-[14px] font-[700] w-[33px] h-[33px] ${
                currentStep === 2
                  ? "bg-[#BEE2FD] text-[#022959]"
                  : "bg-transparent text-white border border-white"
              }`}
            >
              2
            </li>
            <li
              className={`flex justify-center items-center rounded-full text-[14px] font-[700] w-[33px] h-[33px] ${
                currentStep === 3
                  ? "bg-[#BEE2FD] text-[#022959]"
                  : "bg-transparent text-white border border-white"
              }`}
            >
              3
            </li>
            <li
              className={`flex justify-center items-center rounded-full text-[14px] font-[700] w-[33px] h-[33px] ${
                currentStep === 4
                  ? "bg-[#BEE2FD] text-[#022959]"
                  : "bg-transparent text-white border border-white"
              }`}
            >
              4
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/step1" element={<Personal />} />
        <Route path="/step2" element={<Plan planType={planType} setPlanType={setPlanType} price={price} setPrice={setPrice} toggle={toggle} setToggle={setToggle} />} />
        <Route path="/step3" element={<Addons isChecked1={isChecked1}
              setIsChecked1={setIsChecked1}
              isChecked2={isChecked2}
              setIsChecked2={setIsChecked2}
              isChecked3={isChecked3}
              setIsChecked3={setIsChecked3} />} />
        <Route path="/step4" element={<Finishing />} />
      </Routes>
      <div className=" h-2"></div>
      <div className="z-10 w-full h-[72px] bg-white mt-auto flex justify-center items-center">
        <div className="flex justify-between w-[90%]">
        
          
          <Link
            className={`${
              step > 1 ? "block" : " invisible"
            } w-[97px] h-[40px] flex justify-center items-center rounded-md  bg-red-500 text-white mr-2`}
            onClick={goToPreviousStep}
            to={`/step${step - 1}`}
          >
            Go Back
          </Link>
          
          <Link
            className="w-[97px] h-[40px] flex justify-center items-center rounded-md bg-[#022959] text-white mr-2"
            onClick={goToNextStep}
            to={`/step${step}`}
          >
            Next Step
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default App;
