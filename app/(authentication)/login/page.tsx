import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"

export default function Login() {
	return (
		<div className="h-screen flex flex-col bg-gray-800">
			<div className="flex justify-center">
				<MainTitle />
			</div>
			<div className="flex flex-row flex-grow items-center">
				<LeftSideMenu />
			</div>
		</div>
	)
}
