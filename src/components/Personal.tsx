


const Personal = () => {


  


  return (
    <div>
    <div className=" w-11/12 m-auto bg-white shadow-conteinerShadow rounded-xl -mt-24 ">
      <div className=" w-[90%] m-auto ">
        <div className=" pt-5">
          <p className=" font-[700] text-[#022959] text-[24px] ">Personal Info</p>
          <p className=" font-[400]  text-[#9699AA] text-[16px] ">Please provide your name, email address, and phone number.</p>
        </div>
        <div className=" grid gap-5 mt-5 pb-7 ">
          <div>
            <p className=" font-[400] text-[12px] text-[#022959] ">Name</p>
            <input className="w-full h-10 border border-[#D6D9E6] bg-white font-[500] text-[15px] outline-none pl-3" placeholder="e.g. Stephen King"  type="input" />
          </div>
          <div>
            <p className=" font-[400] text-[12px] text-[#022959] ">Email Address</p>
            <input className="w-full h-10 border border-[#D6D9E6] bg-white font-[500] text-[15px] outline-none pl-3" type="input" placeholder="e.g. stephenking@lorem.com" />
          </div>
          <div>
            <p className=" font-[400] text-[12px] text-[#022959] ">Phone Number</p>
            <input className="w-full h-10 border border-[#D6D9E6] bg-white font-[500] text-[15px] outline-none pl-3" type="input" placeholder="e.g. +1 234 567 890" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Personal;
