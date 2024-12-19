"use client"
import LeftSideMenu from "../_components/LeftSideMenu"
import MainTitle from "../_components/MainTitle"
import RightSideReview from "../_components/RightSideReview"

// Contact page
export default function Contact() {
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
						Reach Us
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
						<p className="p-1">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy
							text ever since the 1500s, when an unknown printer took a galley
							of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
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
