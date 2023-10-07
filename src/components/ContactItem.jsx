export const ContactItem = ({ img, title, contact }) => {
	return (
		<figure>
			<a
				href={`${contact.type}:${contact.data}`}
				className="flex flex-col gap-8 items-center text-center">
				<img
					className='w-32 h-32 border-[3px] border-[#c5a47e] rounded-full'
					src={ img }
					alt={ title }
					width='128px'
					height='128px' />
				<figcaption className='text-lg'>
					<h5 className='font-bold leading-[23.1px] uppercase'>{ title }</h5>
					<span className='leading-[23.1px] text-gray-900/60'>{ contact.data }</span>
				</figcaption>
			</a>
		</figure>
	);
}