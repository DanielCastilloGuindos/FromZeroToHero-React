import { useState } from "react";

export const Hambuger = ({ handleClick, pieceBgColor = 'bg-black' }) => {

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);

		handleClick();
	};

  const handleBlur = () => {
    // Si el menú está abierto y pierde el foco, ejecuta handleClick
    if (isOpen) {
			setIsOpen(!isOpen);
      handleClick();
    }
  };

	return (
		<button
		id="hamburger"
		type="button"
		className={`relative w-10 h-10 m-4 block sm:hidden focus:outline-none bg-red-700-button ${!isOpen ? '' : ''}`}
		onBlur={ handleBlur }
		onClick={ toggleMenu }>
			<span className={`absolute top-[35%] left-2/4 -translate-x-2/4 translate-y-2/4 block w-6 h-0.5 ${ pieceBgColor } rounded-sm ${isOpen ? 'animate-topbarx' : ''}`}></span>
			<span className={`absolute top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4 block w-6 h-0.5 ${ pieceBgColor } rounded-sm ${isOpen ? 'animate-middlebarx' : ''}`}></span>
			<span className={`absolute top-[65%] left-2/4 -translate-x-2/4 translate-y-2/4 block w-6 h-0.5 ${ pieceBgColor } rounded-sm ${isOpen ? 'animate-bottombarx' : ''}`}></span>
		</button>
	)
}