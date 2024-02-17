import swap from "../../../assets/testspage/swap.svg";
const TestField = ({id,type}) => {
    return (
      <div>
        <div style={{border:`1px solid ${type != "failed" ? "#A0AEC0" :"red"}`}} className="border border-[#A0AEC0] flex justify-between w-[739px] rounded-lg p-4">
        {type != "failed" && <>
        <h1 className="text-black font-bold text-xl">Test #{id}</h1> 
        <button disabled className="bg-[#BEE3F8] rounded-lg h-[24px] w-[24px] flex justify-center items-center">
            <img src={swap} />
          </button>
        </>}
        {type === "failed" && <>
        <h1 className="text-[#A0AEC0] text-xl">Test #{id}</h1>
        <button disabled className="bg-[#C1C1C1] text-[#A0AEC0] rounded-lg h-[24px] w-[24px] flex justify-center items-center">
            <img src={swap} />
          </button>
        </>}
         
      </div>
       {type === "failed" && <p className="text-[red] text-sm pt-2"> Sorry,You fail in this test try other tests</p>}  
      </div>
    );
  };
  
  export default TestField;