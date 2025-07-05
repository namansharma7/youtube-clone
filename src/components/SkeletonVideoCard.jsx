// components/SkeletonVideoCard.jsx
import React from 'react';

function SkeletonVideoCard() {
	return (
		<div className="w-full animate-pulse rounded-lg shadow-md">
			<div className="h-48 bg-gray-200 rounded-t-md" />
			<div className="flex items-center gap-3 p-4">
				<div className="w-10 h-10 bg-gray-300 rounded-full" />
				<div className="flex-1 space-y-2">
					<div className="h-3 bg-gray-300 rounded w-3/4" />
					<div className="h-3 bg-gray-300 rounded w-1/2" />
				</div>
			</div>
		</div>
	);
}

export default SkeletonVideoCard;
