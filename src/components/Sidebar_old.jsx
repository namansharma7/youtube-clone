import React from 'react';
import { BiVideo } from 'react-icons/bi';
import { FaChevronRight, FaRegNewspaper, FaYoutube } from 'react-icons/fa';
import { GiLinkedRings } from 'react-icons/gi';
import { MdOutlineSubscriptions, MdWatchLater, MdHome  } from 'react-icons/md';
import { PiFilmSlateLight } from 'react-icons/pi';
import { SiStylelint, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts } from 'react-icons/si';
import { TfiCup } from 'react-icons/tfi';

function Sidebar(isOpen=false) {
    const sidebarItems = [
        {
            "id": 1,
            "name": "Home",
            "icon": <MdHome />
        },
        {
            "id": 2,
            "name": "Shorts",
            "icon": <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em" >
                <path d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z" fill-rule="evenodd"></path></svg>
        },
        {
            "id": 3,
            "name": "Subscription",
            "icon": <MdOutlineSubscriptions />
        }
    ];

    const sidebarItems2 = [
        {
            "id": 1,
            "name": "Your Channel",
            "icon": <MdHome />
        },
        {
            "id": 2,
            "name": "History",
            "icon": <SiYoutubeshorts />
        },
        {
            "id": 3,
            "name": "Playlists",
            "icon": <MdOutlineSubscriptions />
        },
        {
            "id": 4,
            "name": "Your Videos",
            "icon": <BiVideo />
        },
        {
            "id": 5,
            "name": "Watch later",
            "icon": <MdWatchLater />
        },
        {
            "id": 6,
            "name": "Liked videos",
            "icon": <GiLinkedRings />
        }
    ];

    const sidebarItems3 = [
        {
            "id": 1,
            "name": "Trending",
            "icon": <MdHome />
        },
        {
            "id": 2,
            "name": "Shopping",
            "icon": <SiYoutubeshorts />
        },
        {
            "id": 3,
            "name": "Music",
            "icon": <SiYoutubemusic />
        },
        {
            "id": 4,
            "name": "Film",
            "icon": <PiFilmSlateLight />
        },
        {
            "id": 5,
            "name": "Live",
            "icon": <MdWatchLater />
        },
        {
            "id": 6,
            "name": "Gaming",
            "icon": <GiLinkedRings />
        },
        {
            "id": 7,
            "name": "News",
            "icon": <FaRegNewspaper />
        },
        {
            "id": 8,
            "name": "Sport",
            "icon": <TfiCup />
        },
        {
            "id": 9,
            "name": "Courses",
            "icon": <SiStylelint />
        },
        {
            "id": 10,
            "name": "Fashion & Beauty",
            "icon": <SiStylelint />
        }
    ];

    const sidebarItems4 = [
        {
            "id": 1,
            "name": "Youtube Premium",
            "icon": <FaYoutube />
        },
        {
            "id": 2,
            "name": "Youtube Studio",
            "icon": <SiYoutubeshorts />
        },
        {
            "id": 3,
            "name": "Youtube kids",
            "icon": <SiYoutubemusic />
        },
        {
            "id": 4,
            "name": "Youtube Music",
            "icon": <SiYoutubekids />
        }
    ];
    return (
        // <div className='px-2 w-[50vw] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden hidden md:block'>
        <div
            className={`fixed z-50 bg-white top-0 left-0 h-full w-64 p-4 overflow-y-scroll transition-transform transform
                ${false ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:block hidden`}
        >
            <div className='space-y-2 items-center'>
                {
                    sidebarItems.map((item) => {
                        return (
                            <div key={item.id} className="px-4 py-1 flex items-center space-x-4 hover:bg-gray-300 duration-300 rounded-xl ">
                                <div className="text-[1.8em] cursor-pointer">{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <hr />
            <div className='space-y-2 items-center mt-4'>
                <div className="px-4 flex items-center space-x-2">
                    <h1>You</h1>
                    <FaChevronRight/>
                </div>
                {
                    sidebarItems2.map((item) => {
                        return (
                            <div key={item.id} className="px-4 py-1 flex items-center space-x-4 hover:bg-gray-300 duration-300 rounded-xl ">
                                <div className='text-xl cursor-pointer'>{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <hr />
            <div className='space-y-2 items-center mt-4'>
                <div className="px-4 flex items-center space-x-2">
                    <h1>Explore</h1>
                </div>
                {
                    sidebarItems3.map((item) => {
                        return (
                            <div key={item.id} className="px-4 py-1 flex items-center space-x-4 hover:bg-gray-300 duration-300 rounded-xl ">
                                <div className='text-xl cursor-pointer'>{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <hr />
            <div className='space-y-2 items-center mt-4'>
                <div className="px-4 flex items-center space-x-2">
                    <h1>More From Youtube</h1>
                </div>
                {
                    sidebarItems4.map((item) => {
                        return (
                            <div key={item.id} className="px-4 py-1 flex items-center space-x-4 hover:bg-gray-300 duration-300 rounded-xl ">
                                <div className='text-xl cursor-pointer text-red-600'>{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar