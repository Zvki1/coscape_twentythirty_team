import { HiOutlineMail } from "react-icons/hi";
import { RiLockLine } from "react-icons/ri";
import { useState } from "react";
import api from "../../api";


function Login() {
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const handleLogin=async()=>{
        if(user.email && user.password){
            console.log(user)
            const response = await api.post('/login', user)
            console.log(response)
        }
    }
  return (
    <div className="flex justify-center items-center py-10 px-20 text-main-blue bg-grayblue rounded-xl">
      <div>
        <h1 className="font-bold mb-6">Login</h1>
        <div>
          <form>
            <div className="relative w-[450px] h-[67px] flex items-center ">
              <input
                type="text"
                placeholder="email"
                required
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                className="placeholder-main-blue flex-grow text-main-blue px-10 p-3 gap-2 bg-secondary-blue rounded-[12px]"
              />
              <HiOutlineMail
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                size={20}
                color="#4299E1"
              />
            </div>
            <div className="relative w-[450px] h-[67px] flex items-center ">
              <input
                type="password"
                placeholder="password"
                required
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                className="placeholder-main-blue flex-grow px-10 p-3 gap-2 text-main-blue bg-secondary-blue rounded-[12px]"
              />
              <RiLockLine
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                size={20}
                color="#4299E1"
              />
            </div>
          </form>
          <div className="flex flex-col py-4 gap-2 justify-center items-center">
            <button onClick={handleLogin} className="w-[171px] h-[42px] text-white  flex justify-center items-center p-2 gap-2 bg-[#4299E1] rounded-[6px]">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;