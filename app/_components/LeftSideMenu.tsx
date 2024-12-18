import CustomButtonNavigation from "./CustomButtonNavigation"
import useClientStore from "../store"

export default function LeftSideMenu() {
	const { user, updateUser } = useClientStore()
	let stateUser: string = ""
	let loginLogout: string = ""
	let loginShopOrCart: string = ""
	let loginShopNavigate: string = ""
	let loginCartNavigate: string = ""

	if (user === "") {
		stateUser = "Login"
		loginLogout = "/login"
		loginShopOrCart = "bg-red-800"
		loginShopNavigate = ""
		loginCartNavigate = ""
	} else {
		stateUser = "Logout"
		loginLogout = "/home"
		loginShopOrCart = "bg-yellow-200"
		loginShopNavigate = "/shop"
		loginCartNavigate = "/customer-cart"
	}

	function loggedInOrLoggedOut() {
		if (stateUser === "Login") {
		} else {
			updateUser("")
		}
	}

	return (
		<div className="flex flex-col gap-3 px-14">
			<CustomButtonNavigation
				title={"Home"}
				navigation={"/home"}
				func={() => {}}
				bgcolor="bg-yellow-200"
			></CustomButtonNavigation>

			<CustomButtonNavigation
				title={stateUser}
				navigation={loginLogout}
				func={loggedInOrLoggedOut}
				bgcolor="bg-yellow-200"
			></CustomButtonNavigation>

			<CustomButtonNavigation
				title={"Shop"}
				navigation={loginShopNavigate}
				func={() => {}}
				bgcolor={loginShopOrCart}
			></CustomButtonNavigation>

			<CustomButtonNavigation
				title={"Your Cart"}
				navigation={loginCartNavigate}
				func={() => {}}
				bgcolor={loginShopOrCart}
			></CustomButtonNavigation>

			<CustomButtonNavigation
				title={"Contact Us"}
				navigation={"/contact"}
				func={() => {}}
				bgcolor="bg-yellow-200"
			></CustomButtonNavigation>
		</div>
	)
}
