"use client"
import { ChangeEvent, FormEvent, useState } from "react"
import { Review } from "../_type/ICustomUser"

export default function RightSideReview() {
	const [review, setReview] = useState<Review>({
		username: "",
		review: "",
	})

	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault() // Prevent reload of page

		setIsLoading(true)

		const newReview: Review = {
			username: review.username,
			review: review.review,
		}

		// POST
		const result = await fetch("http://localhost:8080/api/v1/user", {
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
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setReview((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	return (
		<div className="flex flex-col gap-3 px-14">
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
