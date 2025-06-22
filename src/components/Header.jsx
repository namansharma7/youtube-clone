import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import YoutubeLogo from "../../public/images/YoutubeLogo.png";

export default function Header({ toggleSidebar, isOpen }) {
  return (
    <header className={`fixed top-0 left-0 w-full h-14 z-50 flex items-center px-4 ${isOpen ? 'opacity-25 bg-black' : ''}`}>
      <div
        onClick={toggleSidebar}
        className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full transition"
      >
        <AiOutlineMenu className="h-5 w-5" />
      </div>
      <img
        src={YoutubeLogo}
        alt="YouTube Logo"
        className="w-24 h-5 ml-4 cursor-pointer"
      />
    </header>
  );
}
