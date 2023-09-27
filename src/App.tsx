import {Routes, Link, Route} from "react-router-dom"
import Personal from "./components/Personal"
import {useEffect} from "react"
import axios from "axios"

function App() {

  

  return (
    <div className="flex flex-col h-screen bg-[#EFF5FF]">
      <div className="h-[200px] w-full bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url(/assets/bg-sidebar-mobile.svg)"}}>
        <div className="flex justify-center items-center w-full pt-6">
          <ul className="flex w-[180px] justify-between items-center">
            <li className="w-[33px] h-[33px] bg-[#BEE2FD] rounded-full flex justify-center items-center font-[Ubntu] text-[14px] font-[700] text-[#022959]">1</li>
            <li className="w-[33px] h-[33px] bg-[#BEE2FD] rounded-full flex justify-center items-center font-[Ubntu] text-[14px] font-[700] text-[#022959]">2</li>
            <li className="w-[33px] h-[33px] bg-[#BEE2FD] rounded-full flex justify-center items-center font-[Ubntu] text-[14px] font-[700] text-[#022959]">3</li>
            <li className="w-[33px] h-[33px] bg-[#BEE2FD] rounded-full flex justify-center items-center font-[Ubntu] text-[14px] font-[700] text-[#022959]">4</li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Personal />} />
      </Routes>
      <div className="z-10 w-full h-[72px] bg-white mt-auto flex justify-center items-center ">
        <div className=" flex justify-end w-[90%] ">
          <Link className=" w-[97px] h-[40px] flex justify-center items-center rounded-md bg-[#022959] text-white mr-0" to="/">Next Step</Link>
        </div>
      </div>
    </div>
  );
 
  
}

export default App
