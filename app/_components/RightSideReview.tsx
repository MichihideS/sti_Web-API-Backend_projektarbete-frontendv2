"use client"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Review } from "../_type/ICustomUser"
import useClientStore from "../store"

// The right side menu that contains the review columns and is connected to the postgres DB
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
			paragraph.appendChild(document.createTextNode(" "))
			paragraph.appendChild(reviewSpan)
			paragraph.className = "my-2 p-1 bg-gray-100 rounded-lg shadow-md"

			if (reviews != null) {
				reviews.appendChild(paragraph)
			}
		}
	}

	/**
	 *	Function handles the submit form when you want to enter a new review with a POST
	 *	connection to the database
	 */
	async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault() // Prevent reload of page

		if (review.review !== "") {
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

			setReview({ username: "", review: "" })

			// 200 ok
			if (result.ok) {
				const data = await result.json()
				console.log(data)
				setErrorText("")
			} else {
				const resultError = await result.json()
				console.error(resultError)
			}
		} else {
			setErrorText("Wrong, try again!")
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
			<p
				className="flex justify-center items-center    text-lg
    rounded-sm
		border-4
		border-solid 
	border-white
		border-opacity-10  
    p-1 
    "
			>
				Comments & Reviews
			</p>
			{/* Container for the reviews */}
			<div id="review-container" className="max-h-80 overflow-y-auto"></div>
			<p className="text-red-600">{errorText}</p>
			<form className="flex flex-col" onSubmit={handleOnSubmit} method="post">
				{/* Submit Button */}
				<button
					className="
          p-4 
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
          bg-yellow-200
          "
					type="submit"
				>
					Submit
				</button>

				{/* Review Input*/}
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
