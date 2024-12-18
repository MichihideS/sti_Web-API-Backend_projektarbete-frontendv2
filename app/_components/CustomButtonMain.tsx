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
			className="p-4 bg-sky-500 font-bold hover:bg-sky-400"
		>
			{title}
		</button>
	)
}
