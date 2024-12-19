"use client"
import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"
import RightSideReview from "@/app/_components/RightSideReview"
import useClientStore from "@/app/store"
import { useEffect, useState } from "react"

export default function CustomerCart() {
	const [cartBody, setCartBody] = useState<Array<number>>([])
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { user, updateUser } = useClientStore()

	useEffect(() => {
		if (user != null) {
			getCart()
		}
	}, [user]) // Dependency array listens to changes in `user`

	/**
	 * Async Function that retrieves all the reviews from the database with corresponding user.
	 * It will split the 2 strings with span so different styling options can be added to each string
	 * and will then add it to the final reviews that contains all the reviews with stylings.
	 */
	async function getCart() {
		const response = await fetch(`http://localhost:8080/api/v1/user/${user}`)
		const data = await response.json()

		console.log("User: " + user)
		console.log(data)

		setCartBody(data.cart)
	}

	return (
		<div className="h-screen flex flex-col justify-between bg-gray-800">
			<div className="flex justify-center items-start">
				<MainTitle />
			</div>
			<div className="flex justify-between items-center mb-36">
				<LeftSideMenu />

				<div>
					<p>Your Cart Contains:</p>
					<div>Cucumbers: {cartBody[0]} </div>
				</div>

				<div className="">
					<RightSideReview />
				</div>
			</div>
		</div>
	)
}
