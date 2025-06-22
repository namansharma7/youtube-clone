import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
	"All", "Music", "T-Series", "Test Cricket", "News", "Live", "Batter", "Indian pop music",
	"Mixes", "Podcasts", "Akshay Kumar", "Dramedy", "Aamir Khan", "Satsang", "Gaming", "Mixes",
	"Satire", "Thrillers", "Gaming", "Historic Sites", "Natural", "WWE",
	"Sports entertainment", "Indian pop music", "Batter",
	"History", "Thoughts", "Recently uploaded",
	"Live", "Cricket", "Movies", "Technology", "Education",
	"Coding", "Vlogs", "Science", "News", "Comedy"
];

function HomeCategories() {
	const scrollRef = useRef(null);
	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(false);

	const checkScroll = () => {
		const el = scrollRef.current;
		if (!el) return;

		setShowLeft(el.scrollLeft > 0);
		setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
	};

	useEffect(() => {
		checkScroll();
		const el = scrollRef.current;
		if (el) {
			el.addEventListener('scroll', checkScroll);
			return () => el.removeEventListener('scroll', checkScroll);
		}
	}, []);

	const scroll = (direction) => {
		if (scrollRef.current) {
			const amount = direction === 'left' ? -300 : 300;
			scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
		}
	};

	return (
		<div className="relative w-full bg-white px-2 py-2 flex items-center">
			{/* Left Arrow */}
			{showLeft && (
				<button
					onClick={() => scroll('left')}
					className="z-10 absolute left-0 bg-white rounded-full p-2 shadow-md"
				>
					<FaChevronLeft size={14} />
				</button>
			)}

			{/* Scrollable Categories */}
			<div
				ref={scrollRef}
				className="mx-1 flex overflow-x-auto space-x-3 scrollbar-hide scroll-smooth"
			>
				{categories.map((category, index) => (
					<div
						key={index}
						className={`whitespace-nowrap px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-200 cursor-pointer ${index == 0 ? 'bg-black text-white' : 'bg-gray-100'}`}
					>
						{category}
					</div> 
				))}
			</div>

			{/* Right Arrow */}
			{showRight && (
				<button
					onClick={() => scroll('right')}
					className="z-10 absolute right-0 bg-white rounded-full p-2 shadow-md"
				>
					<FaChevronRight size={14} />
				</button>
			)}
		</div>
	);
}

export default HomeCategories;
