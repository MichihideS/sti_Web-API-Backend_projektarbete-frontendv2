"use client"
import MainTitle from "../_components/MainTitle"
import LeftSideMenu from "../_components/LeftSideMenu"
import RightSideReview from "../_components/RightSideReview"

// Home page
export default function Home() {
	return (
		<div className="h-screen flex flex-col justify-between bg-gray-800">
			<div className="flex justify-center items-start">
				<MainTitle />
			</div>
			<div className="flex justify-between items-center mb-36">
				<LeftSideMenu />

				<div className="flex flex-col justify-center items-center">
					<div
						className="			
							p-8
							w-px-128
							rounded-sm
							border-2
							border-solid 
						border-white
							border-opacity-30
							"
					>
						<p className="p-1 text-lg">
							Take this chance and check out the best store you could ever find
							from distant land. Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum has been the
							industry&apos;s standard dummy text ever since the 1500s. emaining
							essentially unchanged. It was popularised in the 1960s with the
							release of Letraset sheets containing Lorem Ipsum passages, and
							more recently with desktop publishing software like Aldus
							PageMaker including versions of Lorem Ipsum.
						</p>
					</div>
				</div>

				<div className="">
					<RightSideReview />
				</div>
			</div>
		</div>
	)
}
