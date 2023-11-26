export const NavigationItem = ({
	path,
	title
}) => {
	return (
		<a href={path} className="w-full sm:w-auto text-[.813rem] font-['Verlag-Book'] font-semibold uppercase hover:text-[#c5a47e] border-b sm:border-none transition-colors duration-300 sm:duration-0 shrink-0">
			{title}
		</a>
	)
}