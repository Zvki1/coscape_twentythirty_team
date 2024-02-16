/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa6";

export const MemberField = ({member, check,updateChecked}) => {
  return (
    <div className="flex gap-4 items-center">
       <input
  type="checkbox"
  defaultChecked={check}
  className="form-checkbox h-5 w-5 text-blue-600"
  onChange={updateChecked}
/>

      <div className="bg-white border flex  items-center justify-between py-3 border-gray-400 rounded-lg px-4 w-full  mx-auto my-8">
        <div className="flex justify-center items-center">
             
            <div className="rounded-full flex justify-center items-center w-[80px] h-[80px]"><img className="w-[60px] h-[60px] rounded-full " src={member.imgUrl} /> </div>
            <h1 className="text-main-blue font-bold text-2xl">{member.name}</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <FaLinkedin className="text-main-blue" size={30} />
            <p className="text-[#A0AEC0]">{member.linkdinUrl}</p>
        </div>
        <div className="bg-[#42E148] rounded-full p-2 font-bold">
            <p>{member.skill}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
           <div className="flex flex-col items-center justify-center gap-1">
           <div className="text-xl font-bold">
              70 %
            </div>
            <div className="text-[#A0AEC0] text-lg">
              Passed
            </div>
           </div>

            <div className="bg-[#EDF2F7] rounded-full flex h-2 w-[100px]">
              <div className="w-[70%] rounded-full h-2 bg-[#42E148]"> </div>
            </div>
        </div>
      </div>
    </div>
   
  );
};
