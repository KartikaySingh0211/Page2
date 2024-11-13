import React from "react";
import { Card } from "./card";

const ProfileCard = ({ firstName, lastName, role }) => {
	return (
		<div className="max-w-[300px] hover:scale-110 transition-all">
			<Card className="bg-white rounded-2xl overflow-hidden w-[200px] h-[350px]">
				{/* Image */}
				<div className="bg-gray-100 h-56 w-full" />

				{/* Text content */}
				<div className="p-4 border-t-[15px] border-t-[#adadad]">
					<h3 className="font-bold text-gray-900">
						{firstName} {lastName}
					</h3>
					<p className="text-sm text-gray-500">{role}</p>
				</div>
			</Card>
		</div>
	);
};

export default ProfileCard;
