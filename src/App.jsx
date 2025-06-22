import React from 'react'

import Home from './components/Home';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';

import { useAuth } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom';
import { Loading } from './loader/Loading';

function App() {
	const {loading} = useAuth();
	//if (loading) return <Loading />;
	return (
		<div className='h-[calc(100vh)] overflow-y-scroll overflow-x-hidden'>
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/search/:searchQuery" element={<Search />} />
				<Route path="/video/:id" element={<VideoPlayer />} />
			</Routes>
		</div>
	)
}

export default App


// import React, { useState } from "react";
// import Header from "./components/Header";
// import Sidebar1 from "./components/Sidebar1";
// import { useAuth } from "./context/AuthProvider";

// export default function App() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     return (
//         <div className={`flex`}>
//             <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isOpen={isSidebarOpen} />
//             <Sidebar1 isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//             <main
//                 className={`mt-14 transition-all duration-300 p-4 w-full ${isSidebarOpen ? 'bg-transparent bg-black opacity-25' : ''}`}
//             >
//                 <h2 className="text-xl font-semibold">Main Content Area</h2>
//             </main>
//         </div>
//     );
// }
