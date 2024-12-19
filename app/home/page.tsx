"use client"
import MainTitle from "../_components/MainTitle"
import LeftSideMenu from "../_components/LeftSideMenu"

// Home page
export default function Home() {
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
