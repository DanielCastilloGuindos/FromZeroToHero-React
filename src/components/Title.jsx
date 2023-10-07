export const Title = ({
	title,
	subtitle,
  extraClass = ''
}) => {
	return (
		<header
        className={`flex flex-col justify-start gap-5 w-full h-32 items-center text-center text-[#333] ${extraClass}`}>
        <h4
          className="w-[240px] text-2xl opacity-60 leading-[23.1px] -mb-1">
          { subtitle }
        </h4>
  
        <h3 className="text-4xl tracking-wider font-bold uppercase">
          { title }
        </h3>
  
        <div className="flex flex-row justify-start gap-3 items-center text-[#c5a47e]">
          <span className="w-20 border border-[#c5a47e]"></span>
          <span className="text-lg w-3">
            ✻
          </span>
          <span className="w-20 border border-[#c5a47e]"></span>
        </div>
      </header>
	);
}