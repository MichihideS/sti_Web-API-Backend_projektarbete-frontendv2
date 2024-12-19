"use client"
import LeftSideMenu from "../_components/LeftSideMenu"
import MainTitle from "../_components/MainTitle"

// Contact page
export default function Contact() {
	return (
		<div className="h-screen flex flex-col bg-gray-800">
			<div className="flex justify-center">
				<MainTitle />
			</div>
			<div className="flex flex-row flex-grow items-center">
				<LeftSideMenu />
			</div>
		</div>
	)
}
