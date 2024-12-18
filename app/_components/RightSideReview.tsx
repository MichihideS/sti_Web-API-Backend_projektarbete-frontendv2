"use client"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Review } from "../_type/ICustomUser"
import useClientStore from "../store"

export default function RightSideReview() {
	useEffect(() => {
		getReviews()
	}, []) // Empty Array to only call getReviews() once

	const [errorText, setErrorText] = useState<string>("")
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { user, updateUser } = useClientStore()
	const [review, setReview] = useState<Review>({
		username: "",
		review: "",
	})

	const [isLoading, setIsLoading] = useState<boolean>(false)

	/**
	 * Async Function that retrieves all the reviews from the database with corresponding user.
	 * It will split the 2 strings with span so different styling options can be added to each string
	 * and will then add it to the final reviews that contains all the reviews with stylings.
	 */
	async function getReviews() {
		const response = await fetch("http://localhost:8080/api/v1/review")
		const data = await response.json()

		const reviews = document.getElementById("review-container")

		if (reviews != null) {
			reviews.innerHTML = "" // Clear the reviews to prevent duplicates
		}

		console.log(data)

		for (let i = 0; i < data.length; i++) {
			const reviewAndUserName = data[i]
			const usernameString = reviewAndUserName.username
			const reviewString = reviewAndUserName.review

			const paragraph = document.createElement("p")
			const usernameSpan = document.createElement("span")
			const reviewSpan = document.createElement("span")

			usernameSpan.textContent = `${usernameString}: `
			usernameSpan.className = "text-blue-800 font-semibold text-sm"

			reviewSpan.textContent = `${reviewString}`
			reviewSpan.className = "text-gray-700 text-xs"

			paragraph.appendChild(usernameSpan)
			paragraph.appendChild(document.createTextNode(" ")) // Add space between the spans
			paragraph.appendChild(reviewSpan)
			paragraph.className = "my-2 p-1 bg-gray-100 rounded-lg shadow-md"

			if (reviews != null) {
				reviews.appendChild(paragraph)
			}
		}
	}

	async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
		if (review.review !== "") {
			event.preventDefault() // Prevent reload of page

			setIsLoading(true)

			let anonymousOrUser: string = ""

			if (user === "") {
				anonymousOrUser = "Anonymous"
			} else {
				anonymousOrUser = user
			}

			const newReview: Review = {
				username: anonymousOrUser,
				review: review.review,
			}

			// POST
			const result = await fetch("http://localhost:8080/api/v1/review", {
				method: "POST",
				headers: {
					"content-type": "application/json;charset=UTF-8",
				},
				body: JSON.stringify(newReview),
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
			event.preventDefault()
			setErrorText("Noob try again")
		}
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setReview((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	return (
		<div className="flex flex-col gap-3 px-14 w-80">
			<div id="review-container"></div>

			<p className="text-red-600">{errorText}</p>

			<form className="flex flex-col" onSubmit={handleOnSubmit} method="post">
				<button
					className="bg-yellow-200 p-4 rounded-md hover:bg-blue-500"
					type="submit"
					disabled={isLoading}
				>
					Submit{" "}
					{isLoading ? (
						<span className="inline-block animate-spin">↻</span>
					) : (
						""
					)}
				</button>

				{/* Review */}
				<label htmlFor="review">Review</label>
				<input
					className="text-black"
					type="text"
					name="review"
					value={review.review}
					onChange={(event) => handleChange(event)}
				/>
			</form>
		</div>
	)
}
