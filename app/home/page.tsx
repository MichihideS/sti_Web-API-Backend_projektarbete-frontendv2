"use client"

import { useEffect } from "react"
import MainTitle from "../_components/MainTitle"
import LeftSideMenu from "../_components/LeftSideMenu"

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
				<LeftSideMenu />
			</div>
		</div>
	)
}
