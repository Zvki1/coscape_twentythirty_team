import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <Link to="/" className="font-bold text-xl text-[#4299E1]">
        Career-Up
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Link to="/home" className="text-gray-600">
          Home
        </Link>
        <Link to="/about" className="text-gray-600">
          About Us
        </Link>
        <Link to="/flow" className="text-gray-600">
          Our Flow
        </Link>
        <Link to="/faq" className="text-gray-600">
          FAQ
        </Link>
      </div>
      <Link to="/login" className="flex flex-col py-4 gap-2 justify-center items-center">
        <button  className="w-full px-4 text-white flex justify-center items-center py-2 gap-2 bg-[#4299E1] rounded-[6px]">
          Login
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
