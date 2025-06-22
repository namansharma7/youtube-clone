import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import YoutubeLogo from '../../public/images/YoutubeLogo.png';
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
	return (
		<header className='flex justify-between px-4 py-2 bg-gray-50'>
			<div className='flex items-center space-x-4'>
				<div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full transition duration-100">
					<AiOutlineMenu className='h-5 w-5' />
				</div>
				<img src={YoutubeLogo} alt="YouTube Logo" className="w-24 h-5 cursor-pointer" />
			</div>

			<div className='flex w-[54%]'>
				<div className='w-[100%] px-3 py-2 border border-gray-400 rounded-l-full'>
					<input type="text" placeholder='Search' className='outline-none font-normal text-[1rem]' />
				</div>
				<button className='px-4 py-3 bg-gray-100 cursor-pointer rounded-r-full border border-gray-400'>
					<CiSearch className='w-10' />
				</button>
				<IoMic className='w-12 h-10 bg-gray-100 ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
			</div>
			<div className='flex justify-between item-center space-x-5'>
				<RiVideoAddLine className='h-6 w-6 cursor-pointer' />
				<AiOutlineBell className='h-6 w-6 cursor-pointer' />
				<FaRegUserCircle className='h-6 w-6 cursor-pointer' />
			</div>
		</header >
	)
}

export default Navbar