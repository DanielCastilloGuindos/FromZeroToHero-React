export const Parallax = ({
	title,
	backgroundImagePath,
	frontImagePath
}) =>{
	return (
		<>
			<section className={`bg-[url(${backgroundImagePath})] bg-no-repeat bg-cover bg-center w-full h-full flex flex-col justify-center items-center z-10 backdrop-contrast-150 before:w-full before:h-full before:bg-[#333]/40 before:absolute before:top-0 before:left-0 before:-z-10`} > 
				
				<h1 className="grow flex items-center">
					<span className="hidden">{ title }</span>
					<img
						src={ frontImagePath }
						alt={ title }
						title={ title }
						width={624}
						height={200}
						className="w-48 sm:w-[624px] h-auto"/>
				</h1>

				<a href="#nosotros" className="hidden sm:block my-10 w-12 h-12 rounded-full border border-white"></a>

			</section>
		</>
	);
}