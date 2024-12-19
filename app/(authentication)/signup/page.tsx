"use client"
import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"
import RightSideReview from "@/app/_components/RightSideReview"
import { CustomUser, CustomUserForm } from "@/app/_type/ICustomUser"
import { ChangeEvent, FormEvent, useState } from "react"

// SignUp Page for creating new user
export default function SignUp() {
	const [customUser, setCustomUser] = useState<CustomUserForm>({
		username: "",
		password: "",
		repeatPassword: "",
	})

	const [errorText, setErrorText] = useState<string>("")
	const [errorTextColor, setErrorTextColor] = useState<string>("")

	/** Function that handles the creating of account process.
	 *	Since these accounts are bcrypted they cannot be access via login in this
	 *	project since it doesn't use JTW
	 */
	async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault() // Prevent reload of page

		if (customUser.password === customUser.repeatPassword) {
			const checkNewUser = await getUser()

			if (
				checkNewUser &&
				customUser.username.length > 1 &&
				customUser.password.length > 6
			) {
				// Exclude repeat password
				const newUser: CustomUser = {
					username: customUser.username,
					password: customUser.password,
					cart: [0, 0, 0, 0, 0, 0, 0, 0],
				}

				// POST
				const result = await fetch("http://localhost:8080/api/v1/user", {
					method: "POST",
					headers: {
						"content-type": "application/json;charset=UTF-8",
					},
					body: JSON.stringify(newUser),
				})
				setErrorTextColor("text-green-600")
				setErrorText("User Successfully Created!")

				// 200 ok
				if (result.ok) {
					const data = await result.json()
					console.log(data)
				} else {
					const resultError = await result.json()
					console.error(resultError)
				}
			} else {
				setErrorTextColor("text-red-600")
				setErrorText("Wrong, try again!")
			}
		} else {
			setErrorTextColor("text-red-600")
			setErrorText("Wrong, try again!")
		}
	}

	// Function that checks if the user already exists in the database
	async function getUser(): Promise<boolean> {
		const response = await fetch("http://localhost:8080/api/v1/user")
		const data = await response.json()
		let isNewUser: boolean = true

		for (let i = 0; i < data.length; i++) {
			if (customUser.username === data[i].username) {
				isNewUser = false
			}
		}

		return isNewUser
	}

	// Handles the changes in state when you try to sign up
	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setCustomUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	return (
		<div className="h-screen flex flex-col justify-between bg-gray-800">
			<div className="flex justify-center items-center">
				<MainTitle />
			</div>
			<div className="flex justify-between items-center mb-10">
				<LeftSideMenu />
				<form
					onSubmit={handleOnSubmit}
					method="post"
					className="flex flex-col max-w-sm gap-3 justify-center items-center"
				>
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
					<label htmlFor="password">Password</label>
					<input
						className="text-black"
						type="password"
						name="password"
						value={customUser.password}
						onChange={(event) => handleChange(event)}
					/>

					{/* Repeat Password */}
					<label htmlFor="repeatPassword">Confirm Password</label>
					<input
						className="text-black"
						type="password"
						name="repeatPassword"
						value={customUser.repeatPassword}
						onChange={(event) => handleChange(event)}
					/>

					<p className={errorTextColor}>{errorText}</p>

					<button
						className="p-4 
						bg-opacity-20 
						font-bold 
					hover:bg-yellow-950 
						hover:opacity-30
						w-52
						rounded-sm
						border-2
						border-solid 
					border-white
						border-opacity-30
					bg-yellow-200"
						type="submit"
					>
						Sign Up
					</button>
				</form>
				<div className="">
					<RightSideReview />
				</div>
			</div>
		</div>
	)
}
