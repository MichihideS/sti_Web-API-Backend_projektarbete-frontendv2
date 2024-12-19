"use client"
import { CustomUser, CustomUserForm } from "@/app/_type/ICustomUser"
import { ChangeEvent, FormEvent, useState } from "react"

export default function SignUp() {
	const [customUser, setCustomUser] = useState<CustomUserForm>({
		username: "",
		password: "",
		repeatPassword: "",
	})

	const [errorText, setErrorText] = useState<string>("")
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault() // Prevent reload of page

		if (customUser.password === customUser.repeatPassword) {
			const checkNewUser = await getUser()

			if (checkNewUser) {
				setIsLoading(true)

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

				// 200 ok
				if (result.ok) {
					const data = await result.json()
					console.log(data)
				} else {
					const resultError = await result.json()
					console.error(resultError)
				}

				setIsLoading(false)
			} else {
				setErrorText("User already exists")
			}
		} else {
			setErrorText("Noob try again")
		}
	}

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

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setCustomUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	return (
		<div className="h-screen flex flex-col justify-center items-center bg-slate-800">
			<form
				onSubmit={handleOnSubmit}
				method="post"
				className="flex flex-col max-w-sm gap-4"
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

				{/* FIELD ERRORS */}
				<p></p>

				<p className="text-red-600">{errorText}</p>

				<button
					className="bg-blue-600 p-4 rounded-md hover:bg-blue-500"
					type="submit"
					disabled={isLoading}
				>
					Sign Up{" "}
					{isLoading ? (
						<span className="inline-block animate-spin">↻</span>
					) : (
						""
					)}
				</button>
			</form>
		</div>
	)
}
