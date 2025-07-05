import React from 'react';
import Sidebar from './Sidebar';
import Sidebar1 from './Sidebar1';
import Video from './Video';
import { useAuth } from '../context/AuthProvider';
import HomeCategories from './HomeCategories';
import SkeletonVideoCard from './SkeletonVideoCard';

function Home({ isSidebarOpen, toggleSidebar }) {
	const { data, loading } = useAuth();
	console.log("data : ", data);

	return (
		<div className='flex'>
			<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			{/* <Sidebar /> */}
			<div className='mx-4 overflow-x-hidden'>
				<HomeCategories />
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2'>
					{
						!loading && data.map((item) => {
							if (item?.type != 'video') return false;
							return (
								<Video key={item?.video?.videoId} video={item?.video} />
							);
						})
					}

					{loading &&
						Array.from({ length: 18 }).map((_, index) => (
							<SkeletonVideoCard key={index} />
						))

					}
				</div>
			</div>
		</div>
	)
}

export default Home