"use client"

import { useEffect } from "react"
import CustomButtonMain from "../_components/CustomButtonMain"

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
		<div>
			<CustomButtonMain
				title={"LogTest"}
				myFunction={logTest}
			></CustomButtonMain>
		</div>
	)
}
