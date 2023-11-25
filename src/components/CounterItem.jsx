import { useEffect, useState, useRef } from "react";

export const CounterItem = ({ title, subtitle, initState = 0, lastState = 1, timer = 2000 }) => {
  const [currentCount, setCurrentCount] = useState(initState);
  const containerRef = useRef(null);

  useEffect(() => {
    if (lastState <= initState) {
      console.error("Error: lastState debe ser mayor que initState");
      return;
    }

		// Incremento más frecuente
    const steps = Math.ceil((lastState - initState) / (timer / 100));

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        const intervalId = setInterval(() => {
          setCurrentCount((prevCount) => {
            const nextCount = prevCount + steps;
            return nextCount < lastState ? nextCount : lastState;
          });
        }, timer / 100);  // Dividido por 100 para obtener la décima parte del tiempo

        return () => clearInterval(intervalId);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Cuando al menos el 10% del componente es visible
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [lastState, timer]);

  return (
    <figure ref={containerRef} className='flex flex-col gap-4 justify-center items-center'>
      <h5 className='text-[1.65rem] leading-9 tracking-wider'>{title}</h5>
      <span className='text-[0.95rem] font-[Helvetica] tracking-wider'>{subtitle}</span>
      <p className='text-5xl font-[Slim-Joe]'>{currentCount}</p>
    </figure>
  );
};
