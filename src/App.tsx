import {
  Routes,
  Link,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Personal from "./components/Personal";
import { useEffect, useState } from "react";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import Finishing from "./components/Finishing";
import { AddonType, Price } from "./types/priceTypes";
import Done from "./components/Done";
import axios from "axios";

function App() {
  const [step, setStep] = useState<number>(1);

  const [toggle, setToggle] = useState<boolean>(true);
  const [planType, setPlanType] = useState<string>("Arcade");
  const [price, setPrice] = useState<Price>({
    arcade: 9,
    advanced: 12,
    pro: 15,
  });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [addonPrice, setAddonPrice] = useState<AddonType>({
    online: 1,
    another: 2,
    third: 3,
  });

  const [isChecked1, setIsChecked1] = useState<boolean>(true);
  const [isChecked2, setIsChecked2] = useState<boolean>(true);
  const [isChecked3, setIsChecked3] = useState<boolean>(true);

  const navigate = useNavigate();
  const location: any = useLocation();
  const currentStep = parseInt(location.pathname.replace("/step", ""), 10);

  useEffect(() => {
    navigate(`/step${step}`);
  }, [step, navigate]);

  const goToNextStep = async () => {
    if (step < 5) {
      setStep(step + 1);
    }

    if(step === 4) {
      try {
        
          await axios.post("https://multi-step-form-back-production.up.railway.app/api/form",
          {
            "name": name,
            "phone": phone,
            "email": email,
            "plan": {
              "monthly": `${!toggle ? "no" : "yes"}`,
              "yearly": `${toggle ? "no" : "yes"}`
            },
            "addons": {
              "onlineServices": !isChecked1,
              "largerStorage": !isChecked2,
              "customizableProfile": !isChecked3
            }
          }
          )
        
      } catch (error) {
        console.log(error);
        
      }
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
                currentStep === 4 || currentStep === 5
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
        <Route
          path="/step1"
          element={
            <Personal
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
            />
          }
        />
        <Route
          path="/step2"
          element={
            <Plan
              planType={planType}
              setPlanType={setPlanType}
              price={price}
              setPrice={setPrice}
              toggle={toggle}
              setToggle={setToggle}
              setAddonPrice={setAddonPrice}
            />
          }
        />
        <Route
          path="/step3"
          element={
            <Addons
              isChecked1={isChecked1}
              setIsChecked1={setIsChecked1}
              isChecked2={isChecked2}
              setIsChecked2={setIsChecked2}
              isChecked3={isChecked3}
              setIsChecked3={setIsChecked3}
              addonPrice={addonPrice}
              toggle={toggle}
            />
          }
        />
        <Route
          path="/step4"
          element={
            <Finishing
              planType={planType}
              toggle={toggle}
              setStep={setStep}
              price={price}
              isChecked1={isChecked1}
              isChecked2={isChecked2}
              isChecked3={isChecked3}
              addonPrice={addonPrice}
            />
          }
        />
        <Route path="/step5" element={<Done />} />
      </Routes>
      <div className=" h-2"></div>
      <div className="z-10 w-full h-[72px] bg-white mt-auto flex justify-center items-center">
        <div className="flex justify-between w-[90%]">
          <Link
            className={`${
              step > 1 && step < 5 ? "block" : " invisible"
            } w-[97px] h-[40px] flex justify-center items-center rounded-md  bg-red-500 text-white mr-2`}
            onClick={goToPreviousStep}
            to={`/step${step - 1}`}
          >
            Go Back
          </Link>

          <Link
        
            className={`w-[97px] h-[40px] justify-center items-center rounded-md bg-[#022959] text-white mr-2 ${
              step === 5 ? "invisible" : "flex"
            }`}
            onClick={goToNextStep}
            to={`/step${step}`}
          >
            {step === 4 ? "Confirm" : "Next step"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
