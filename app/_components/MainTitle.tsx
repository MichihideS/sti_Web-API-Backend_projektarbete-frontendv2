// A component for the main header of the site with some styling
export default function MainTitle() {
	return (
		<div className="flex flex-col justify-center items-center">
			<div
				className="
    text-7xl
    rounded-sm
		border-4
		border-solid 
	border-white
		border-opacity-10  
    p-6 
    mt-4 
    "
			>
				<p>Space Invader</p>
			</div>
			<div
				className="
			    text-3xl
    	rounded-sm
		border-2
		border-solid 
	border-white
		border-opacity-10  
    p-2 
    mt-3
		"
			>
				<p>The Shop From The Future</p>
			</div>
		</div>
	)
}
