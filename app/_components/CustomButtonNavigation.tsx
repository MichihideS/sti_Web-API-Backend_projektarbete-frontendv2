import Link from "next/link"

// Custom button for navigation
export default function CustomButtonNavigation({
	title,
	navigation,
}: {
	title: string
	navigation: string
}) {
	return (
		<Link href={navigation}>
			<button
				className="
			p-4 
			bg-yellow-200 
			bg-opacity-20 
			font-bold 
			hover:bg-yellow-950 
			hover:opacity-30
			min-w-40 
			rounded-sm
			border-2
			border-solid 
			border-white
			border-opacity-30
			"
			>
				{title}
			</button>
		</Link>
	)
}
