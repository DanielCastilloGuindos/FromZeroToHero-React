import React, { useEffect, useRef, useState } from "react";

export const Carousel = ({ children, intervalTime= 8000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);
	let intervalRef = useRef(null);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + children.length) % children.length);
		resetTimer();
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % children.length);
		resetTimer();
  };

	const resetTimer = () => {
		clearInterval(intervalRef.current)
		intervalRef.current = setInterval( handleNextSlide, 3000 );
	}

	useEffect(() => {
		intervalRef.current = setInterval( handleNextSlide, 3000 );
		return () => clearInterval(intervalRef.current);
	}, [])

	return (
		<section className="relative w-full overflow-hidden">

      {/* Carousel items */}
      <div>
        {React.Children.map(children, (child, index) => {
					let isActive = index === activeSlide;
					return React.cloneElement(child, { isActive })
				})}
      </div>

			<div className="absolute top-0 left-0 w-full h-full grid grid-flow-col">
				<button
					id="arrowLeft"
					onClick={ handlePrevSlide }
					className="cursor-[url(/images/carousel/arrow-left.png),_pointer] text-transparent">arrowLeft</button>
				<button
					id="arrowRigth"
					onClick={ handleNextSlide }
					className="cursor-[url(/images/carousel/arrow-right.png),_pointer] text-transparent">arrowRigth</button>
			</div>
    </section>
	);
}