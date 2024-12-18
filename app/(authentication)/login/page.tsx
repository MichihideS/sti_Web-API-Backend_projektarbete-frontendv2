"use client"
import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"
import { CustomUserFormLogin } from "@/app/_type/ICustomUser"
import { ChangeEvent, useState } from "react"

export default function Login() {
	const [customUser, setCustomUser] = useState<CustomUserFormLogin>({
		username: "",
		password: "",
	})

	function handleOnClick() {
		getUser()
	}

	async function getUser() {
		const response = await fetch("http://localhost:8080/api/v1/user")
		const data = await response.json()

		console.log(data)
		console.log(customUser.username)
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setCustomUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	return (
		<div className="h-screen flex flex-col bg-gray-800">
			<div className="flex justify-center">
				<MainTitle />
			</div>
			<div className="flex flex-row flex-grow items-center">
				<LeftSideMenu />
				<button onClick={handleOnClick}>TEST</button>
			</div>
			<div>
				{/* Username */}
				<label htmlFor="username">Username</label>
				<input
					className="text-black"
					type="text"
					name="username"
					value={customUser.username}
					onChange={(event) => handleChange(event)}
				/>
			</div>
		</div>
	)
}
