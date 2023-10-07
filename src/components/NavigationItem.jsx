export const NavigationItem = ({
	path,
	title
}) => {
	return (
		<a href={path} className="text-[.75rem] font-['Verlag-Book'] font-semibold tracking-[.1rem] leading-[2.2rem] uppercase hover:text-[#c5a47e] transition-colors duration-300 shrink-0">
			{title}
		</a>
	)
}