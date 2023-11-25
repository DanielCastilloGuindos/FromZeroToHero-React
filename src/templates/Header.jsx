import { Navegation } from "../components/Navegation";
import { Parallax } from "../components/Parallax";

export const Header = () => {

	return (
		<header className="h-[80vh] sm:h-screen">
			<Navegation />
			<Parallax
				title='Arte19'
				backgroundImagePath='/images/parallax.jpg'
				frontImagePath='/images/logo.png' />
		</header>
	);
}