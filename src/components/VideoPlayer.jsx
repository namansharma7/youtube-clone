import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/rapidapi';
import ReactPlayer from 'react-player';
import { BsFillCheckCircleFill, BsFilterLeft, BsPersonCircle, BsThreeDots } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';
import { AiOutlineLike } from 'react-icons/ai';
import { PiShareFat, PiThumbsDownLight, PiThumbsDownThin, PiThumbsUpLight } from 'react-icons/pi';
import { LiaDownloadSolid } from 'react-icons/lia';
import { GoBookmark } from 'react-icons/go';
import { IoFlagOutline } from 'react-icons/io5';

function VideoPlayer() {
	const [video, setVideo] = useState();
	const [relatedVideo, setRelatedVideo] = useState();
	const [isExpanded, setIsExpanded] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		fetchVideoDetails();
	}, [id]);

	const fetchVideoDetails = () => {
		fetchData(`video/details/?id=${id}`)
			.then((response) => {
				console.log(response);
				setVideo(response);
			});
	}

	const toggleDescription = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="flex justify-center mt-16 px-4">
			<div className="w-full max-w-[1500px] flex flex-col lg:flex-row gap-4">
				{/* Left Section */}
				<div className="flex-1 flex flex-col p-4">
					{/* Video player with fixed aspect ratio */}
					<div className="aspect-video bg-black rounded-lg overflow-hidden">
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							width="100%"
							height="100%"
							controls
							playing
						/>
					</div>

					{/* Title */}
					<h1 className="mt-4 font-bold text-lg line-clamp-2">{video?.title}</h1>

					{/* Channel Info and Actions */}
					<div className="flex justify-between items-start flex-col md:flex-row mt-4">
						<div className="flex items-start gap-4">
							{video?.author?.avatar[0]?.url ? (
								<img
									src={video.author.avatar[0].url}
									alt="channel"
									className="h-full w-full object-cover"
								/>
							) : (
								<BsPersonCircle className="text-3xl text-gray-500" />
							)}
							<div>
								<div className="text-md font-semibold flex items-center">
									{/* {video?.author?.title} */}
									Yahoo Baba
								</div>
								<div className="text-sm text-gray-500 text-[11px]">
									{/* {video?.author?.stats?.subscribersText} */}
									30.6K Subscribers
								</div>
							</div>
							<button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-1 ml-4">
								Subscribe
							</button>
						</div>

						{/* Like/View Buttons */}
						<div className="flex mt-4 md:mt-0 gap-4">
							{/* Likes dislikes */}
							<div className='bg-gray-200 rounded-full py-2'>
								<div className="flex items-center gap-4 px-4 ">
									<button className='flex gap-2 align-middle items-center'>
										<PiThumbsUpLight className='text-xl' />
										27K
									</button>
									<button className='flex items-center border-l border-gray-400 ps-2'>
										<PiThumbsDownLight className='text-xl' />
									</button>
								</div>
							</div>

							{/* Share */}
							<div className='flex justify-center items-center bg-gray-200 rounded-full py-2 px-4 gap-1'>
								<PiShareFat className='text-xl' />
								<span className='font-roboto'>Share</span>
							</div>

							{/* Dropdown */}
							<details className="relative">
								<summary className="list-none cursor-pointer">
									<div className="flex justify-center items-center bg-gray-200 rounded-full px-2 py-2">
										<BsThreeDots className="text-xl" />
									</div>
								</summary>

								<ul className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 text-sm text-gray-800">
									<li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2">
										<LiaDownloadSolid className='text-lg' />Download
									</li>
									<li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2">
										<GoBookmark className="text-lg" />
										Save
									</li>
									<li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-2">
										<IoFlagOutline className="text-lg" />
										Report
									</li>
								</ul>
							</details>
						</div>
					</div>

					{/* Description with Read More/Less */}
					{true && (
						<div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm relative">
							<p className={isExpanded ? '' : 'line-clamp-2'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.</p>
							{true && (
								<span
									onClick={toggleDescription}
									className="text-blue-600 mt-2 block cursor-pointer"
								>
									{isExpanded ? 'Read less' : 'Read more'}
								</span>
							)}
						</div>
					)}

					<div className="flex items-center gap-4">
						<div className="me-4">
							{/* Comments */}
							{video?.stats?.comments ? (
								<div className="text-lg font-semibold">
									{/* {video.stats.comments} */}
									1,098 Comments
								</div>
							) : (
								<div className="mt-4 text-lg font-semibold">
									1098 Comments
								</div>
							)}
						</div>
						<div className="flex items-center gap-2">
							<BsFilterLeft className='text-3xl' />
							<span>Sort by</span>
						</div>

					</div>
					{/* Add a Comment Input */}
					<div className="flex items-start mt-4 gap-4">
						<BsPersonCircle className="text-3xl mt-1" />
						<input
							type="text"
							placeholder="Add a comment..."
							className="flex-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 pb-2"
						/>
					</div>

					{/* List of Comments */}
					<div className="mt-6 space-y-6">

						{/* Comment 1 */}
						<div className="flex items-start gap-4">
							<BsPersonCircle className='text-3xl' />
							<div className="flex-1">
								<div className="text-sm font-semibold">@Yashmusic19.19 <span className="text-gray-500 font-normal ml-1">7 months ago</span></div>
								<p className="text-sm mt-1">Bahut badiya mene bahut dance dekhe is song par aap logo ka sabse best laga mujhe 1 no.</p>
								<div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
									<button className="flex items-center gap-1"><AiOutlineLike /> 12</button>
									<button className="text-xs font-semibold">Reply</button>
								</div>
							</div>
						</div>

						{/* Comment 2 */}
						<div className="flex items-start gap-4">
							<BsPersonCircle className='text-3xl' />

							<div className="flex-1">
								<div className="text-sm font-semibold">@GulsanTrick10 <span className="text-gray-500 font-normal ml-1">4 weeks ago</span></div>
								<p className="text-sm mt-1">Nice bhai❤️ 😊 🎉</p>
								<div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
									<button className="flex items-center gap-1"><AiOutlineLike /> 5</button>
									<button className="text-xs font-semibold">Reply</button>
								</div>
							</div>
						</div>

						{/* Add more comments as needed */}
					</div>
				</div>



				{/* Right Section - Related Videos */}
				<div className="w-full lg:w-[350px] xl:w-[400px]">
					{/* Placeholder for related videos */}
				</div>
			</div>
		</div>
	);
}

export default VideoPlayer;
