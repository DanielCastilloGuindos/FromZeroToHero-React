import { NavigationItem } from "./NavigationItem"
import { useEffect, useState } from "react";

export const Navegation = ({ data }) => {
	const [ scrollPosition, setScrollPosition] = useState( window.scrollY || window.pageYOffset );
	const [ heightPage, setHeightPage ] = useState( window.innerHeight );
	const visibleEnable = scrollPosition > heightPage;
	const borderClass = !visibleEnable
		? 'bg-opacity-0 text-white'
		: 'bg-opacity-100 text-gray-900/60 border-b border-gray-200';

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

	return (
		<nav className={`fixed top-0 left-0 w-full flex shrink-0 justify-end items-end self-stretch gap-9 bg-white ${ borderClass } h-16 pb-3 px-20 z-20`}>

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
		</nav>
	)
}