export const CarouselSlide = ({ background, content, isActive = false }) => {
	let myOpacity = isActive ? 'opacity-100' : 'opacity-0';

	return (
		<figure className={`relative w-full float-left -mr-[100%] !transform-none ${myOpacity} transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none`}>
			<img className="w-full object-cover" src={ background } alt=""/>
			<figcaption>{ content }</figcaption>
		</figure>
	);
}