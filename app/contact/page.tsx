"use client"

import CustomButtonNavigation from "../_components/CustomButtonNavigation"

export default function Contact() {
	return (
		<div className="h-screen flex justify-start items-center bg-gray-800">
			<div className="flex flex-col gap-3 px-14">
				<CustomButtonNavigation
					title={"Home"}
					navigation={"/home"}
				></CustomButtonNavigation>

				<CustomButtonNavigation
					title={"Login"}
					navigation={"/login"}
				></CustomButtonNavigation>

				<CustomButtonNavigation
					title={"Shop"}
					navigation={"/shop"}
				></CustomButtonNavigation>

				<CustomButtonNavigation
					title={"Your Cart"}
					navigation={"/customer-cart"}
				></CustomButtonNavigation>

				<button
					className="
				p-4 
			bg-green-600
			bg-opacity-20 
			font-bold 
			min-w-40 
			rounded-sm
			border-2
			border-solid 
			border-white
			border-opacity-30
			"
				>
					Contact Us
				</button>
			</div>
		</div>
	)
}
