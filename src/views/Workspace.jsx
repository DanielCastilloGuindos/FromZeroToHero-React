import { Title } from "../components/Title";
import { useNavigate, useParams } from "react-router-dom";
import workspaceData from "../data/workspace.json";

export const Workspace = () => {
	const navigate = useNavigate();
	const { workspaceKey } = useParams()
	const data = workspaceData[workspaceKey];

	if (!data)
		navigate("/404");

	const handleReturn = () => {
		navigate('/');
	};

	document.documentElement.scrollTop = 0;

	return (
		<main className="bg-zinc-800/95 min-h-screen pt-20 pb-8">
			<header className="relative max-w-7xl px-6 sm:scroll-px-10">
				<Title
					title={ data.title }
					subtitle='Áreas de Trabajo'
					extraClass='text-gray-100 sm:w-full'
					extraStyleTitle={{
						'viewTransitionName': `title_${data.title.replaceAll(' ', '_')}`
					}}
					/>
				<button
					onClick={ handleReturn }
					className="absolute top-1/4 sm:top-1/2 right-6 sm:right-16 -translate-y-1/2 w-6 sm:w-12 h-6 sm:h-12 border-2 border-white hover:border-orange-500 -rotate-45 hover:rotate-45 transition-all rounded-full group">
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[.1rem] bg-white group-hover:bg-orange-500 transition-all "></span>
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[.1rem] bg-white group-hover:bg-orange-500 rotate-90 transition-all "></span>
				</button>

			</header>
			<article className='grid grid-cols-1 sm:grid-cols-[28%_60%] gap-8 max-w-7xl justify-center items-start w-full mx-auto pt-24'>
				<section className='max-w-3xl px-8 sm:px-0 font-sans text-md text-gray-300 inset-52'>
					{ data.description || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem ab cupiditate ipsam neque sint quam id quo, consectetur enim placeat, impedit ad adipisci dignissimos saepe quae tempore animi? Ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem ab cupiditate ipsam neque sint quam id quo, consectetur enim placeat, impedit ad adipisci dignissimos saepe quae tempore animi? Ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem ab cupiditate ipsam neque sint quam id quo, consectetur enim placeat, impedit ad adipisci dignissimos saepe quae tempore animi? Ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem ab cupiditate ipsam neque sint quam id quo, consectetur enim placeat, impedit ad adipisci dignissimos saepe quae tempore animi? Ipsam.' }
				</section>
				<section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{ data.images.map((image, index) => {
						const isFirstItem = index == 0;
						return (
							<img
								src={image}
								key={image}
								style={isFirstItem
									? {
										'viewTransitionName': `image_${ data.title.replaceAll(' ', '_') }`
									}
									: undefined}
								/>
						)
					})} 
				</section>
			</article>
		</main>
	);
}