import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import usericonblue from "../../assets/blue/user-account.svg";
import myteam from "../../assets/user-multiple.svg";
import tests from "../../assets/diploma.svg";
import settings from "../../assets/settings-02.svg";
import Logo from '../../assets/Logo.svg';
const SideBar = () => {
  return (
    <aside className="h-screen flex flex-col   w-2/12 items-center pt-6 pb-9 border-r-2 border-[#EAEAEA] rounded-r-[20px] gap-8">
      <Link to="/" className="font-bold text-xl text-[#4299E1] px-4 lg:px-8 ">
        <img src={Logo} alt='logo'/>
      </Link>

      <Divider />
      <div className="flex h-full items-center   justify-between flex-col">
      <div className=" space-y-5 ">
        <Link to="/perso-info" className="flex flex-row gap-2 font-medium text-[14px] text-[#4299E1] hover:text-[#4299E1] ">
          <img src={usericonblue} alt="perso" />
          Personal info
        </Link>
        <Link to="/manage-team" className="flex flex-row gap-2 font-medium text-[14px] text-[#A0AEC0] hover:text-[#4299E1]">
          <img src={myteam} alt="perso" />
          My team
        </Link>
        <Link to="/tests" className="flex flex-row gap-2 font-medium text-[14px] text-[#A0AEC0] hover:text-[#4299E1]">
          <img src={tests} alt="perso" />
          Tests
        </Link>
        <Link className="flex flex-row gap-2 font-medium text-[14px] text-[#A0AEC0] hover:text-[#4299E1]">
          <img src={settings} alt="perso" />
          Settings
        </Link>
      </div>

      <Link>
        <Button colorScheme="red" size="sm">
          Log Out 
        </Button>
      </Link>
        </div>


    </aside>
  );
};

export default SideBar;
