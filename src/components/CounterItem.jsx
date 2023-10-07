import { useEffect, useRef, useState } from "react";

export const CounterItem = ({ title, subtitle, initState = 0, lastState = 1, timer = 2000 }) => {
	// const [ counter, setCounter ] = useState(initState);
	// const fps = (timer) / (lastState - initState);
	// const increment = 50;
	// const interval = useRef();

	// const handleCounter = () => {
	// 	clearInterval(interval.current)
	// 	interval.current = setInterval(() => {
	// 		if (counter < lastState)
	// 			setCounter(current => {
	// 				const nextValue = current + increment;
	// 				return nextValue > lastState ? lastState : nextValue;
	// 			});
	// 	}, fps)
	// }

	// useEffect(() => {

	// 	if (counter < lastState)
	// 		handleCounter();

	// 	return () => {
	// 		clearInterval(interval.current)
	// 	}
	// }, [ lastState ]);

	return (
		<figure className='flex flex-col gap-4 justify-center items-center'>
			<h5 className='text-[1.65rem] leading-9 tracking-wider'>{ title }</h5>
			<span className='text-[0.95rem] font-[Helvetica] tracking-wider'>{ subtitle }</span>
			<p className='text-5xl font-[Slim-Joe]'>{ lastState }</p>
		</figure>
	);
}