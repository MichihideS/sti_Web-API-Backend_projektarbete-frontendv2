import Image, { StaticImageData } from "next/image"

// Custom button for shop with a void function and a custom image and title
export default function ShopItems({
	title,
	myFunction,
	image,
}: {
	title: string
	myFunction: () => void
	image: StaticImageData
}) {
	return (
		<div className="flex flex-col justify-center items-center w-60 h-60">
			<p
				className="
			    text-sm
    rounded-sm
		border-2
		border-solid 
	border-white
		border-opacity-10  
    p-1 
		"
			>
				{title}
			</p>
			<Image
				src={image}
				alt={title}
				width={60}
				height={60}
				className="object-cover mt-2 rounded-sm"
			></Image>
			<button
				onClick={myFunction}
				className="
			p-1
      px-3 
			bg-opacity-20 
			font-bold 
			hover:bg-yellow-950 
			hover:opacity-30
			rounded-sm
			border-1
			border-solid 
			border-white
			border-opacity-30
			bg-yellow-200
      mt-3
			"
			>
				Add Item
			</button>
		</div>
	)
}
