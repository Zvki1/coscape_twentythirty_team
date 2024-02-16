import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
// importing assets
import usericonblue from "../assets/blue/user-account.svg";
import usericon from "../assets/user-account.svg";
import myteam from "../assets/user-multiple.svg";
import myteamblue from "../assets/blue/user-multiple.svg";
import tests from "../assets/diploma.svg";
import testsblue from "../assets/blue/diploma.svg";
import settings from "../assets/settings-02.svg";
import settingsblue from "../assets/blue/settings-02.svg";
const SideBar = () => {
  return (
    <aside className="h-screen flex flex-col   w-2/12 items-center pt-6 pb-9 border-r-2 border-[#EAEAEA] rounded-r-[20px] gap-8">
        {/* logo */}
      <Link to="/" className="font-bold text-xl text-[#4299E1] px-4 lg:px-8 ">
        Career-Up
      </Link>

      <Divider />
      {/* button plus links div */}
      <div className="flex h-full items-center   justify-between flex-col">
        {/* links div */}
      <div className=" space-y-5 ">
        <Link className="flex flex-row gap-2 font-medium text-[14px] text-[#4299E1] hover:text-[#4299E1] ">
          <img src={usericonblue} alt="perso" />
          Personal info
        </Link>
        <Link className="flex flex-row gap-2 font-medium text-[14px] text-[#A0AEC0] hover:text-[#4299E1]">
          <img src={myteam} alt="perso" />
          My team
        </Link>
        <Link className="flex flex-row gap-2 font-medium text-[14px] text-[#A0AEC0] hover:text-[#4299E1]">
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
