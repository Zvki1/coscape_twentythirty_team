/* eslint-disable react/no-unknown-property */
// import InputF from "../../components/InputF";
// import Checked from "../../assets/Checked.svg";
// import { Button } from "@chakra-ui/react";
import { TopTitle } from "../../components/dashboard/manage-team/top-title";
import { useState } from "react";
import { MemberField} from "../../components/dashboard/manage-team/member-field";
const ManageTeam = () => {
    const [team,setTeam] = useState([
        {
            name:"zaki",
            imgUrl:"https://randomuser.me/api/portraits/men/36.jpg",
            linkdinUrl:"zakariae-benhami",
            skill:"web Developer",
        },{
            name:"rayan",
            imgUrl:"https://randomuser.me/api/portraits/men/36.jpg",
            linkdinUrl:"zakariae-benhami",
            skill:"mobile Developer",
        }
    ])
    const [checkAll,setChekAll] = useState(false)
    const [checkedList,setCheckedList] = useState([
        {checked:false},
        {checked:false},
    ])
    const handleCheck=(id)=>{
      const updatedCheckedList = [...checkedList]
      
      const index = updatedCheckedList.findIndex((item)=>item.id===id)
      if(index){
        updatedCheckedList[index].checked = !updatedCheckedList[index].checked
        setCheckedList(updatedCheckedList)
      }

    }
    const handleSelectAll =async ()=>{
      setChekAll(!checkAll)
      const updatedCheckedList = [...checkedList]
     const ryad= updatedCheckedList.map((item)=>{
      item.checked = !checkAll
    })
    console.log('check ;',ryad);
      // setCheckedList( )

    }
  return (
    <div className=" mt-12 w-full px-6">
      <div className="flex justify-between py-4 w-full">
        <TopTitle title={"Manage Your Team"} section={"My team"} />
        <div className="flex gap-4 items-end">
          <button className="px-6 bg-white border-gray-2 border flex justify-center items-center py-2 gap-2 text-gray-2 rounded-[6px]">
            Delete
          </button>
          <button className="px-6 border border-main-blue text-white flex justify-center items-center py-2 gap-2 bg-main-blue rounded-[6px]">
            Invite
          </button>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <input type="checkbox" checked={checkAll} onChange={()=>handleSelectAll()} />
        <p>Select All</p>
      </div>
      {/* <div className=" pt-5 pl-5 bg-secondary-blue rounded-[12px] flex flex-row  gap-[18rem] mt-4">
        <div>
          <h2 className=" text-main-blue text-[24px] font-bold">
            Congarluation,You are a verfied CEO
          </h2>
          <p className=" text-xs font-medium mt-4 text-gray-2">
            Now you can begin your journey to build a verfied team
          </p>
        </div>
        <img src={Checked} alt="" width="118px" height="100" />
      </div> */}
      {/* inputs divs */}
      <div className="flex flex-col">
      {team && team.map((member,index)=>{
        return(
           <div key={index}><MemberField  member={member} checked={checkedList[index]} updateChecked={()=>handleCheck(index)} /></div> 
        )
      })}
      </div>
    </div>
  );
};

export default ManageTeam;
