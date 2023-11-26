import { Hambuger } from "./Hamburger";
import { NavigationItem } from "./NavigationItem"
import { useEffect, useState } from "react";

export const Navegation = ({ data }) => {
	const [ scrollPosition, setScrollPosition] = useState( window.scrollY || window.pageYOffset );
	const [ heightPage, setHeightPage ] = useState( window.innerHeight );
	const [ isActivatedMenu, setIsActivatedMenu] = useState(false);

	const visibleEnable = scrollPosition > heightPage;
	const borderClass = !visibleEnable
		? 'bg-opacity-0 text-gray-900/60 sm:text-white'
		: 'bg-opacity-100 text-gray-900/60 border-b border-gray-200';
	const HambugerBgColor = !visibleEnable
		? 'bg-white'
		: 'bg-black';
	const menuClass = isActivatedMenu
		? 'left-1/4'
		: 'left-full';

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition( window.scrollY || window.pageYOffset );
		}
		const handleResize = () => {
			setHeightPage( window.innerHeight );
		}

		document.addEventListener( 'scroll', handleScroll );
		document.addEventListener( 'resize', handleResize );

		return () => {
			document.removeEventListener( 'scroll', handleScroll );
			document.removeEventListener( 'resize', handleResize );
		}
	}, []);

	let handleActivateMenu = () => {
		setIsActivatedMenu( !isActivatedMenu );
	}

	return (
		<nav className={`fixed top-0 left-0 ${isActivatedMenu ? 'w-1/4 sm:w-full' : 'w-full'} flex shrink-0 justify-end items-center self-stretch gap-9 bg-white ${ borderClass } h-18 sm:py-3 sm:px-20 z-20 transition-all ease-linear duration-1000`}>

			<Hambuger pieceBgColor={ HambugerBgColor } handleClick={ handleActivateMenu } />

			<div className={`w-3/4 sm:w-auto h-screen sm:h-12 fixed sm:relative top-0 ${ menuClass } sm:left-0 pt-8 sm:pt-0 px-8 sm:px-0 flex flex-col sm:flex-row shrink-0 justify-start sm:justify-center items-start sm:items-center gap-10  bg-white sm:bg-transparent border-b border-l border-gray-400 sm:border-b-0 sm:border-l-0 [transition-property: left] ease-linear duration-1000 sm:duration-0`}>
				<NavigationItem
					path='#nosotros'
					title='Nosotros' />
				<NavigationItem
					path='#areasDeEspecialidad'
					title='Áreas de Especialidad' />
				<NavigationItem
					path='#clientes'
					title='Clientes' />
				<NavigationItem
					path='#contacto'
					title='Contacto' />
			</div>
		</nav>
	)
}