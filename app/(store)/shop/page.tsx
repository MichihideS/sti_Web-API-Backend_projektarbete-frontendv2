"use client"
import LeftSideMenu from "@/app/_components/LeftSideMenu"
import MainTitle from "@/app/_components/MainTitle"
import RightSideReview from "@/app/_components/RightSideReview"
import ShopItems from "@/app/_components/ShopItems"
import flying_cucumber from "@/app/_images/flying_cucumber.png"

export default function Shop() {
	return (
		<div className="h-screen flex flex-col justify-between bg-gray-800">
			<div className="flex justify-center items-start">
				<MainTitle />
			</div>
			<div className="flex justify-between items-center mb-36">
				<LeftSideMenu />
				<div className="flex flex-col max-h-96 overflow-y-auto">
					<div className="flex flex-row">
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => {}}
							image={flying_cucumber}
						/>
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => {}}
							image={flying_cucumber}
						/>
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => {}}
							image={flying_cucumber}
						/>
					</div>

					<div className="flex flex-row">
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => {}}
							image={flying_cucumber}
						/>
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => {}}
							image={flying_cucumber}
						/>
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => {}}
							image={flying_cucumber}
						/>
					</div>

					<div className="flex flex-row justify-center items-center">
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => {}}
							image={flying_cucumber}
						/>
						<ShopItems
							title="Flying Cucumber"
							myFunction={() => {}}
							image={flying_cucumber}
						/>
					</div>
				</div>
				<div className="">
					<RightSideReview />
				</div>
			</div>
		</div>
	)
}
