/* eslint-disable react/prop-types */
export const TopTitle =({section,title})=>{
    return(
        <div>
            <p className="text-[#B0B0B0] text-xl  font-medium">{section}</p>
            <h1 className="text-black text-3xl font-semibold mt-1" >{title}</h1>
        </div>
    )
}