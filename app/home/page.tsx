"use client"

import { useEffect } from "react"
import CustomButtonNavigation from "../_components/CustomButtonNavigation"
import MainTitle from "../_components/MainTitle"

export default function Home() {
	function logTest() {
		console.log("WHY")
	}

	useEffect(() => {
		test()
	})

	async function test() {
		const response = await fetch("http://localhost:8080/api/v1/user")
		const data = await response.json()

		console.log(data)
	}

	return (
		<div className="h-screen flex flex-col bg-gray-800">
			<div className="flex justify-center">
				<MainTitle />
			</div>
			<div className="flex flex-row flex-grow items-center">
				<div className="flex flex-col gap-3 px-14">
					<button
						className="
				p-4 
			bg-green-600
			bg-opacity-20 
			font-bold 
			min-w-40 
			rounded-sm
			border-2
			border-solid 
			border-white
			border-opacity-30
			"
					>
						Home
					</button>

					<CustomButtonNavigation
						title={"Login"}
						navigation={"/login"}
					></CustomButtonNavigation>

					<CustomButtonNavigation
						title={"Shop"}
						navigation={"/shop"}
					></CustomButtonNavigation>

					<CustomButtonNavigation
						title={"Your Cart"}
						navigation={"/customer-cart"}
					></CustomButtonNavigation>

					<CustomButtonNavigation
						title={"Contact Us"}
						navigation={"/contact"}
					></CustomButtonNavigation>
				</div>
			</div>
		</div>
	)
}
