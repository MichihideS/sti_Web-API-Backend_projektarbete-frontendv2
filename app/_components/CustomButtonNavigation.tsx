import Link from "next/link"

// Custom button for navigation
export default function CustomButtonNavigation({
	title,
	navigation,
	func,
	bgcolor,
}: {
	title: string
	navigation: string
	func: () => void
	bgcolor: string
}) {
	return (
		<Link href={navigation}>
			<button
				onClick={func}
				className={`
			p-4 
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
			${bgcolor}
			`}
			>
				{title}
			</button>
		</Link>
	)
}
