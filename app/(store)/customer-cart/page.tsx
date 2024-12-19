"use client"
import CartItems from "@/app/_components/CartItems"
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
	 * Async Function that retrieves the cart from the database with corresponding user.
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

				<div className="flex flex-col justify-center items-center">
					<p
						className="
			    	text-xl
    				rounded-sm
						border-2
						border-solid 
					border-white
						border-opacity-10  
    				p-2 
    				mb-3
						"
					>
						Your Cart Contains:
					</p>
					<div
						className="			
						p-8
						w-96
						rounded-sm
						border-2
						border-solid 
					border-white
						border-opacity-30
						"
					>
						<div className="flex flex-row justify-between">
							<CartItems title={"Flying Cucumber:"}></CartItems>
							<div className="p-1 text-lg">{cartBody[0]}</div>
						</div>

						<div className="flex flex-row justify-between">
							<CartItems title={"Jetpack:"}></CartItems>
							<div className="p-1 text-lg">{cartBody[1]}</div>
						</div>

						<div className="flex flex-row justify-between">
							<CartItems title={"Lasergun:"}></CartItems>
							<div className="p-1 text-lg">{cartBody[2]}</div>
						</div>

						<div className="flex flex-row justify-between">
							<CartItems title={"Sattelite:"}></CartItems>
							<div className="p-1 text-lg">{cartBody[3]}</div>
						</div>

						<div className="flex flex-row justify-between">
							<CartItems title={"Space Cat:"}></CartItems>
							<div className="p-1 text-lg">{cartBody[4]}</div>
						</div>

						<div className="flex flex-row justify-between">
							<CartItems title={"Space Suit:"}></CartItems>
							<div className="p-1 text-lg">{cartBody[5]}</div>
						</div>

						<div className="flex flex-row justify-between">
							<CartItems title={"Spaceship:"}></CartItems>
							<div className="p-1 text-lg">{cartBody[6]}</div>
						</div>

						<div className="flex flex-row justify-between">
							<CartItems title={"Star:"}></CartItems>
							<div className="p-1 text-lg">{cartBody[7]}</div>
						</div>
					</div>
				</div>

				<div className="">
					<RightSideReview />
				</div>
			</div>
		</div>
	)
}
