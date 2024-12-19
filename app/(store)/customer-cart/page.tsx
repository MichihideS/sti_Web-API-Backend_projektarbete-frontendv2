"use client"
import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"
import RightSideReview from "@/app/_components/RightSideReview"

export default function CustomerCart() {
	return (
		<div className="h-screen flex flex-col justify-between bg-gray-800">
			<div className="flex justify-center items-start">
				<MainTitle />
			</div>
			<div className="flex justify-between items-center mb-36">
				<LeftSideMenu />

				<div>
					<p>Your Cart Contains:</p>
				</div>

				<div className="">
					<RightSideReview />
				</div>
			</div>
		</div>
	)
}
