"use client"

import CustomButtonNavigation from "@/app/_components/CustomButtonNavigation"

export default function Login() {
	return (
		<div className="h-screen flex justify-start items-center bg-gray-800">
			<div className="flex flex-col gap-3 px-14">
				<CustomButtonNavigation
					title={"Home"}
					navigation={"/home"}
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
					Login
				</button>

				<CustomButtonNavigation
					title={"Shop"}
					navigation={"/shop"}
				></CustomButtonNavigation>

				<CustomButtonNavigation
					title={"Your Cart"}
					navigation={"/customer-cart"}
				></CustomButtonNavigation>

				<CustomButtonNavigation
					title={"Contact Us"}
					navigation={"/contact"}
				></CustomButtonNavigation>
			</div>
		</div>
	)
}
