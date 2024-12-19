"use client"
import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"
import RightSideReview from "@/app/_components/RightSideReview"
import ShopItems from "@/app/_components/ShopItems"
import flying_cucumber from "@/app/_images/flying_cucumber.png"
import jetpack from "@/app/_images/jetpack.png"
import lasergun from "@/app/_images/lasergun.png"
import sattelite from "@/app/_images/sattelite.png"
import space_cat from "@/app/_images/space_cat.png"
import space_suit from "@/app/_images/space_suit.png"
import spaceship from "@/app/_images/spaceship.png"
import star from "@/app/_images/star.png"
import { CustomUser } from "@/app/_type/ICustomUser"
import useClientStore from "@/app/store"
import { useEffect, useState } from "react"

// The Shopping page, which can only be accessed when you are login
export default function Shop() {
	const [cartBody, setCartBody] = useState<Array<number>>([])
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { user, updateUser } = useClientStore()
	const [index, setIndex] = useState<number | null>(null)
	const [currentUser, setCurrentUser] = useState<CustomUser | undefined>(
		undefined
	)
	const [currentId, setCurrentId] = useState<number>(0)

	// Function that retrieves the body of the user with a GET so we can get the id of the user
	async function getUserByUsername(index: number) {
		const response = await fetch(`http://localhost:8080/api/v1/user/${user}`)
		const data = await response.json()

		setCurrentUser(data)
		setCurrentId(data.id)
		setCartBody(data.cart)
		setIndex(index)
	}

	// Function that updates the array of items a customer has with help of ID and a PUT request
	async function updateArrayDatabase() {
		const currentUserNotUpdated: CustomUser = {
			username: currentUser?.username,
			password: currentUser?.password,
			cart: cartBody,
		}

		const result = await fetch(
			`http://localhost:8080/api/v1/user?id=${currentId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(currentUserNotUpdated),
			}
		)

		if (result.ok) {
			const data = await result.text()
			console.log(data)
		} else {
			const resultError = await result.text()
			console.error(resultError)
		}
	}

	// Function that updates the array locally before updating it in the database
	function updateArray(index: number) {
		const newCart = cartBody
		newCart[index] += 1
		setIndex(null)
		setCartBody(newCart)
	}

	// Checks the index and updates the array when it finds one
	useEffect(() => {
		if (index !== null) {
			updateArray(index)
		}
	}, [index])

	// Checks if the array is updated and calls the DB update function
	useEffect(() => {
		if (cartBody.length > 2) {
			updateArrayDatabase()
		}
	}, [cartBody])

	return (
		<div className="h-screen flex flex-col justify-between bg-gray-800">
			<div className="flex justify-center items-start">
				<MainTitle />
			</div>
			<div className="flex justify-between items-center mb-36">
				<LeftSideMenu />
				<div className="flex flex-col max-h-96 overflow-y-auto">
					<div className="flex flex-row">
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => getUserByUsername(0)}
							image={flying_cucumber}
						/>
						<ShopItems
							title="Jetpack"
							myFunction={() => getUserByUsername(1)}
							image={jetpack}
						/>
						<ShopItems
							title="Lasergun"
							myFunction={() => getUserByUsername(2)}
							image={lasergun}
						/>
					</div>

					<div className="flex flex-row">
						<ShopItems
							title="Sattelite"
							myFunction={() => getUserByUsername(3)}
							image={sattelite}
						/>
						<ShopItems
							title="Space Cat"
							myFunction={() => getUserByUsername(4)}
							image={space_cat}
						/>
						<ShopItems
							title="Space Suit"
							myFunction={() => getUserByUsername(5)}
							image={space_suit}
						/>
					</div>

					<div className="flex flex-row justify-center items-center">
						<ShopItems
							title="Spaceship"
							myFunction={() => getUserByUsername(6)}
							image={spaceship}
						/>
						<ShopItems
							title="Star"
							myFunction={() => getUserByUsername(7)}
							image={star}
						/>
					</div>
				</div>
				<div className="">
					<RightSideReview />
				</div>
			</div>
		</div>
	)
}
