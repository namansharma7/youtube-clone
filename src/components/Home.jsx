import React from 'react';
import Sidebar from './Sidebar';
import Video from './Video';
import { useAuth } from '../context/AuthProvider';
import HomeCategories from './HomeCategories';

function Home() {
	const { data, loading } = useAuth();
	console.log("data : ", data);

	return (
		<div className='flex'>
			<Sidebar />
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
				</div>
			</div>
		</div>
	)
}

export default Home