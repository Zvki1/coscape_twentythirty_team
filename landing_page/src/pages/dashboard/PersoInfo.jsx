import SideBar from "../../components/SideBar";
import InputF from "../../components/InputF";
import Checked from "../../assets/Checked.svg";
import { Button } from '@chakra-ui/react'
const PersoInfo = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      {/* content */}
      <div className=" mt-12 ml-24" >
        <p className="text-[#B0B0B0] text-xl  font-medium">Personal Info</p>
        <h1 className="text-black text-3xl font-semibold mt-1" >Check your profile and settings</h1>
        <div className=" pt-5 pl-5 bg-secondary-blue rounded-[12px] flex flex-row  gap-[18rem] mt-4">
          <div >
          <h2 className=" text-main-blue text-[24px] font-bold">Congarluation,You are a verfied CEO</h2>
          <p className=" text-xs font-medium mt-4 text-gray-2">Now you can begin your journey to build a verfied team</p>
          </div>
          <img src={Checked} alt="" width="118px" height="100"  />
        </div>
        {/* inputs divs */}
        <div className="flex flex-row justify-between">
          {/* only inputs  */}
          <div className="flex flex-col gap-5">
          <InputF title="name" stackholder="zaki"/>
          <InputF title="phone number" stackholder="0549660114"/>
          {/* the startup id is optionel */}
          <InputF title="startup id " stackholder="123455"/>
          </div>
        {/* only inputs with butt */}
          <div className="flex flex-col gap-5">
          <InputF title="name" stackholder="zaki"/>
          <InputF title="phone number" stackholder="0549660114"/>
          {/* the startup id is optionel */}
          <Button colorScheme='blue'>Submit</Button>
          </div>
        </div>
      </div>

      </div>
  );
};

export default PersoInfo;
