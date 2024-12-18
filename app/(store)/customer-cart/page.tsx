import CustomButtonNavigation from "@/app/_components/CustomButtonNavigation"

export default function CustomerCart() {
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
					Your Cart
				</button>

				<CustomButtonNavigation
					title={"Contact Us"}
					navigation={"/contact"}
				></CustomButtonNavigation>
			</div>
		</div>
	)
}
