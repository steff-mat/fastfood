import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#754043]">FastFood</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Offers!</li>
        <li className="p-4">Menu</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Home</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60] h-full border-r border-r-gray-900 bg-[#171614] ease-in-out duration-500"
            : "ease-in-out duration-750 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#754043] m-4">
          FastFood
        </h1>
        <li className="p-4 border-b border-grat-600">Home</li>
        <li className="p-4 border-b border-grat-600">Contact</li>
        <li className="p-4 border-b border-grat-600">Menu</li>
        <li className="p-4 ">Offers!</li>
      </ul>
    </div>
  );
};
export default Navbar;
