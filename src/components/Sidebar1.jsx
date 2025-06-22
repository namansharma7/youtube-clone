import React from "react";
import { AiFillHome, AiOutlineFire, AiOutlineHistory, AiOutlineMenu } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import YoutubeLogo from "../../public/images/YoutubeLogo.png";

export default function Sidebar1({ isOpen, toggleSidebar }) {
    return (
        <aside
            className={`fixed top-0 left-0 h-full bg-white w-56 border-r z-100 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="flex items-center px-4 mt-2">
                <div
                    className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full transition"
                    onClick={toggleSidebar}
                >
                    <AiOutlineMenu className="h-5 w-5" />
                </div>
                <img
                    src={YoutubeLogo}
                    alt="YouTube Logo"
                    className="w-24 h-5 ml-4 cursor-pointer"
                />
            </div>
            <nav className="p-4 space-y-4">
                <SidebarItem icon={<AiFillHome />} label="Home" />
                <SidebarItem icon={<AiOutlineFire />} label="Trending" />
                <SidebarItem icon={<MdSubscriptions />} label="Subscriptions" />
                <SidebarItem icon={<MdVideoLibrary />} label="Library" />
                <SidebarItem icon={<AiOutlineHistory />} label="History" />
            </nav>
        </aside>
    );
}

function SidebarItem({ icon, label }) {
    return (
        <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">
            <div className="text-xl">{icon}</div>
            <span className="text-sm font-medium">{label}</span>
        </div>
    );
}
