import CustomButtonNavigation from "./CustomButtonNavigation"

export default function LeftSideMenu() {
	return (
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

			<CustomButtonNavigation
				title={"Contact Us"}
				navigation={"/contact"}
			></CustomButtonNavigation>
		</div>
	)
}
