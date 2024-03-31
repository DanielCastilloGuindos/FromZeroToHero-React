export const Footer = () => {
	let year = new Date().getFullYear();

	return (
		<footer className="flex flex-col sm:flex-row justify-start sm:justify-center items-center gap-8 w-full px-10 py-5 bg-zinc-800/95 text-[#a1a1a1]">

			<nav className="grow flex flex-col sm:flex-row text-center sm:text-right gap-8">
					<a href="#nosotros">Nosotros</a>
					<a href="#areasDeEspecialidad">Áreas de especialidad</a>
					<a href="#clientes">Clientes</a>
					<a href="#contacto">Contacto</a>
			</nav>

			<section className="grow">
				&copy; { year } Arte 19, todos los derechos reservados
			</section>
		</footer>
	)
}