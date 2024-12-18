// Custom button with a void function
export default function CustomButtonMain({
	title,
	myFunction,
}: {
	title: string
	myFunction: () => void
}) {
	return (
		<button
			onClick={myFunction}
			className="
			p-4 
			bg-opacity-20 
			font-bold 
			hover:bg-yellow-950 
			hover:opacity-30
			w-52
			rounded-sm
			border-2
			border-solid 
			border-white
			border-opacity-30
			bg-yellow-200
			"
		>
			{title}
		</button>
	)
}
