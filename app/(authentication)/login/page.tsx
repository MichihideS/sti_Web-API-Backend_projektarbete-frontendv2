"use client"
import CustomButtonMain from "@/app/_components/CustomButtonMain"
import CustomButtonNavigation from "@/app/_components/CustomButtonNavigation"
import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"
import RightSideReview from "@/app/_components/RightSideReview"
import { CustomUserFormLogin } from "@/app/_type/ICustomUser"
import useClientStore from "@/app/store"
import { ChangeEvent, useState } from "react"

export default function Login() {
	const [customUser, setCustomUser] = useState<CustomUserFormLogin>({
		username: "",
		password: "",
	})

	const [errorText, setErrorText] = useState<string>("")
	const { user, updateUser } = useClientStore()

	async function getUser() {
		const response = await fetch("http://localhost:8080/api/v1/user")
		const data = await response.json()

		console.log(data)
		console.log(customUser.username)

		for (let i = 0; i < data.length; i++) {
			if (
				customUser.username === data[i].username &&
				customUser.password === data[i].password
			) {
				updateUser(customUser.username)
			}
		}

		if (user === "") {
			setErrorText("Noob try again")
		}
	}

	function removeUser() {
		updateUser("")
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setCustomUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	return (
		<div className="h-screen flex flex-col justify-between bg-gray-800">
			<div className="flex justify-center items-start">
				<MainTitle />
			</div>
			<div className="flex justify-between items-center mb-36">
				<LeftSideMenu />

				{user === "" ? (
					<div className="flex flex-col justify-center items-center mb-28">
						{/* Username */}
						<label htmlFor="username">Username</label>
						<input
							className="text-black"
							type="text"
							name="username"
							value={customUser.username}
							onChange={(event) => handleChange(event)}
						/>

						{/* Password */}
						<label htmlFor="username">Password</label>
						<input
							className="text-black"
							type="password"
							name="password"
							value={customUser.password}
							onChange={(event) => handleChange(event)}
						/>

						<p className="text-red-600">{errorText}</p>

						<CustomButtonMain
							title="Login"
							myFunction={getUser}
						></CustomButtonMain>

						<CustomButtonNavigation
							title="Sign Up"
							navigation="/signup"
							func={() => {}}
							bgcolor="bg-yellow-200"
						></CustomButtonNavigation>
					</div>
				) : (
					<div className="flex flex-col bg-gray-800 justify-center items-center">
						<CustomButtonMain
							title="Logout"
							myFunction={removeUser}
						></CustomButtonMain>
					</div>
				)}
				<div className="">
					<RightSideReview />
				</div>
			</div>
		</div>
	)
}
