import React, { useState } from 'react';
import { IoMic } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoClose } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMenu } from 'react-icons/ai';
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

import YoutubeLogo from '../../public/images/YoutubeLogo.png';

function Navbar() {

	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();

	const handleSearch = () => {
		if (searchTerm.trim() !== '') {
			navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<header className='flex justify-between px-4 py-2 bg-gray-50'>
			<div className='flex items-center space-x-4'>
				<div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full transition duration-100">
					<AiOutlineMenu className='h-5 w-5' />
				</div>
				<Link to="/">
					<img src={YoutubeLogo} alt="YouTube Logo" className="w-24 h-5 cursor-pointer" />
				</Link>
			</div>

			<div className='hidden md:flex w-[54%]'>
				<div className='relative w-full border border-gray-400 rounded-l-full bg-white px-3 py-2'>
					<input
						type="text"
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						onKeyDown={handleKeyDown}
						className='outline-none font-normal text-[1rem] w-full pr-6 bg-transparent'
					/>
					{searchTerm && (
						<IoClose
							className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer text-lg"
							onClick={() => setSearchTerm('')}
						/>
					)}
				</div>
				<button
					onClick={handleSearch}
					className='px-4 py-3 bg-gray-100 cursor-pointer rounded-r-full border border-gray-400'
				>
					<CiSearch className='w-5 h-5' />
				</button>
				<IoMic className='w-10 h-10 bg-gray-100 ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
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