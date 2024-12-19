"use client"
import CustomButtonMain from "@/app/_components/CustomButtonMain"
import CustomButtonNavigation from "@/app/_components/CustomButtonNavigation"
import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"
import RightSideReview from "@/app/_components/RightSideReview"
import { CustomUserFormLogin } from "@/app/_type/ICustomUser"
import useClientStore from "@/app/store"
import { ChangeEvent, useState } from "react"

// Login page
export default function Login() {
	const [customUser, setCustomUser] = useState<CustomUserFormLogin>({
		username: "",
		password: "",
	})

	const [errorText, setErrorText] = useState<string>("")
	const { user, updateUser } = useClientStore()

	/** Function to GET the user from the database and do an
	 *	unconventional login with a user that is NOT bcrypted for testing purposes
	 * 	since JWT is not implemented
	 */
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
			setErrorText("Wrong, try again!")
		}
	}

	// "Logs out" globally with the global state variable
	function removeUser() {
		updateUser("")
	}

	// Handles the changes in state when you try to login
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
			<div className="flex justify-between items-center mb-10">
				<LeftSideMenu />

				{user === "" ? (
					<div className="flex flex-col justify-center items-center mb-10">
						{/* Username */}
						<label htmlFor="username">Username</label>
						<input
							className="text-black mb-2"
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
						<div className="flex flex-col gap-3 m-1 p-4">
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
					</div>
				) : (
					<div className="flex flex-col bg-gray-800 justify-center items-center">
						<div className="flex flex-col justify-center items-center">
							<div
								className="
								flex
								flex-col
								justify-center
								items-center			
								p-8
								w-96
								rounded-sm
								border-2
								border-solid 
							border-white
								border-opacity-30
								mb-10
								"
							>
								<p className="p-1 text-2xl">You are logged in!</p>
							</div>
						</div>
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
