import { Title } from "../components/Title";
import { Link, useNavigate, useParams } from "react-router-dom";
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

	return (
		<main className="bg-zinc-800/95 min-h-screen pt-20 pb-8">
			<header className="max-w-7xl relative">
				<Title
					title={ data.title }
					subtitle='Áreas de Trabajo'
					extraClass='text-gray-100'
					/>
				<button
					onClick={ handleReturn }
					className="relative w-12 h-12 border-2 border-white hover:border-orange-500 -rotate-45 hover:rotate-45 transition-all rounded-full group">
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[.1rem] bg-white group-hover:bg-orange-500 transition-all "></span>
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[.1rem] bg-white group-hover:bg-orange-500 rotate-90 transition-all "></span>
				</button>

			</header>
			<article className='grid grid-cols-[28%_60%] gap-8 max-w-7xl justify-center items-start w-full mx-auto pt-24'>
				<section className='max-w-3xl font-sans text-md text-gray-300 inset-52'>
					{ data.description || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem ab cupiditate ipsam neque sint quam id quo, consectetur enim placeat, impedit ad adipisci dignissimos saepe quae tempore animi? Ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem ab cupiditate ipsam neque sint quam id quo, consectetur enim placeat, impedit ad adipisci dignissimos saepe quae tempore animi? Ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem ab cupiditate ipsam neque sint quam id quo, consectetur enim placeat, impedit ad adipisci dignissimos saepe quae tempore animi? Ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem ab cupiditate ipsam neque sint quam id quo, consectetur enim placeat, impedit ad adipisci dignissimos saepe quae tempore animi? Ipsam.' }
				</section>
				<section className="grid grid-cols-2 gap-8">
					{ data.images.map((image, index) => {
						const isFirstItem = index == 0;
						return(
							<img
								src={ image }
								key={ image }
								/>
						)
					}) }
				</section>
			</article>
		</main>
	);
}