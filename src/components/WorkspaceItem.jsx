import { Link } from "react-router-dom";

export const WorkspaceItem = ({ title, images, subtitle = '', link }) => {
	const portada = images[0];

	return (
		<figure className='relative overflow-hidden'>
			<Link to={ `/workspace/${ link }` } className='group'>
				<img
					className="w-full object-cover"
					alt=""
					src={ portada }
					/>
				<figcaption className='absolute top-0 left-0 py-10 px-8 w-full h-full flex flex-col justify-center sm:justify-start items-center sm:items-start bg-teal-800 bg-opacity-50 sm:bg-opacity-0 sm:group-hover:bg-opacity-50 text-white text-center sm:text-left transition-all duration-500 group-hover:duration-200 delay-500 group-hover:delay-0 leading-[4rem]'>
					<h5 className='text-[1.65rem] leading-9 tracking-wider font-bold uppercase opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500'>{ title }</h5>
					<span className='text-[0.95rem] font-[Helvetica] tracking-wider opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500'>{ subtitle }</span>
				</figcaption>
			</Link>
		</figure>
	);
}