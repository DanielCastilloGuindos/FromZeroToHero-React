
import { Header } from '../templates/Header'
import { Footer } from '../templates/Footer'
import { Section } from '../components/Section'
import { Carousel } from '../components/Carousel';
import { ContactItem } from '../components/ContactItem';
import { WorkspaceItem } from '../components/WorkspaceItem';
import { CarouselSlide } from '../components/CarouselSlide';
import { CounterItem } from '../components/CounterItem';
import workspaceData from "../data/workspace.json";

export const Home = () => {
  const slides = [
    {
      background: '/images/carousel/panoramica1.jpg',
    },
    {
      background: '/images/carousel/panoramica2.jpg',
    },
    {
      background: '/images/carousel/panoramica3.jpg',
    },
    {
      background: '/images/carousel/panoramica4.jpg',
    },
  ];

	const contactData = [
		{
			img: 'https://arte19.com/assets/img/arte19/logos/taller02.png',
			title: 'Taller',
			contact: {
				type: 'mailto',
				data: 'taller@arte19.com',
			},
		},
		{
			img: 'https://arte19.com/assets/img/arte19/logos/expo02.png',
			title: 'Exposiciones',
			contact: {
				type: 'mailto',
				data: 'expo@arte19.com',
			},
		},
		{
			img: 'https://arte19.com/assets/img/arte19/logos/admin02.png',
			title: 'Administración',
			contact: {
				type: 'mailto',
				data: 'administracion@arte19.com',
			},
		},
	];
	const numbersData = [
		{
			title: 'Enmarcados',
			subtitle: 'Exposiciones y taller de enmarcado',
			lastState: 34574,
		},
		{
			title: 'Exposiciones',
			subtitle: 'Fijas e Itinerantes',
			lastState: 452,
		},
		{
			title: 'Eventos',
			subtitle: 'a nivel nacional',
			lastState: 341,
		}
	];
	const clientsData = [
		"/images/clients/madrid.gif",
		"/images/clients/museoReinaSofia.gif",
		"/images/clients/comunidadDeMadrid.gif",
		"/images/clients/universidadDeAlcala.gif",
		"/images/clients/csic.gif",
		"/images/clients/downMadrid.gif",
		"/images/clients/sigre.gif",
		"/images/clients/hp.gif",
		"/images/clients/tudor.gif",
		"/images/clients/repsol.gif",
		"/images/clients/j&b.gif",
		"/images/clients/triatlon.gif",
	];


	return (
		<>
			<Header />
				<main>
					<Section
						title='Qué hacemos' 
						subtitle='Nosotros'
						id='nosotros' >
						<p className='max-w-3xl px-4 sm:px-0 font-sans text-[14px] sm:text-xl text-gray-500 text-center tracking-wider'>
							<span className='font-extrabold text-gray-900/60 text-center'>Arte 19</span> es una empresa dedicada al montaje de exposiciones y enmarcado de obras de arte. Nuestra empresa ha demostrado su experiencia, a lo largo de 25 años, en la realización de montajes para diferentes museos y salas. Este hecho ha proporcionado un conocimiento en profundidad del mundo de las exposiciones de arte ofreciendo a cada cliente las soluciones a la medida de sus necesidades. Para ello contamos con un excelente equipo de profesionales con una trayectoria dilatada en la manipulación de obras de arte, así como en la enmarcación y el montaje de exposiciones, que realiza su trabajo con la máxima calidad.
						</p>

						<Carousel>
							{slides.map( (slide) => 
								<CarouselSlide {...slide} key={ slide.background }/>
							)}
						</Carousel>

					</Section>

					<Section
						title='Áreas de trabajo'
						subtitle='Nuestras especialidades'
						id='areasDeEspecialidad' >

						<div className='grid grid-cols-1 sm:grid-cols-3 gap-1.5 max-w-6xl'>
								{
									Object.keys(workspaceData).map( key => {
										return(
											<WorkspaceItem
												{...workspaceData[key]}
												link={ key }
												key={ key }
												subtitle='Click para más detalles'
												/>
										);
									})
								}
						</div>
					</Section>
	
					<Section
						title='Contacta con nosotros'
						subtitle='No lo dudes'
						id='contacto'
						extraClass='grid grid-cols-1 sm:grid-cols-[33%_55%] gap-4 justify-center items-center max-w-6xl' >

							<div className='grid grid-cols-1 sm:grid-cols-3'>
								{ contactData.map(data => {
									return( <ContactItem {...data} key={ data.img }/> );
								}) }
							</div>

					</Section>
					<Section
						title='Nuestra razón de ser'
						subtitle='Clientes'
						id='clientes' >
						<p className='max-w-3xl px-4 sm:px-0 font-sans text-[14px] sm:text-xl text-gray-500 text-center tracking-wider'>
							Estos son algunos de los clientes y marcas para las que hemos tenido el privilegio de trabajar, sin olvidarnos de los numerosos organismos oficiales de toda España y artistas particulares que han depositado su confianza en nosotros.
						</p>
						<div className='grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-x-56 sm:gap-y-10 sm:max-w-6xl'>
							{ clientsData.map( dataClient =>
								<img
									key={ dataClient }
									src={ dataClient }
									alt=""
									width='120'
									height='65' />
							) }
						</div>
					</Section>
					<Section
						title='Algunas cifras'
						subtitle='Los números no mienten'
						extraClass='pb-20 bg-[url(/images/parallax.jpg)] bg-no-repeat bg-cover bg-center bg-fixed backdrop-contrast-150 before:w-full before:h-full before:bg-[#333]/60 before:absolute before:top-0 before:left-0 before:-z-10'
						extraTitleClass='text-white'>
							<div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-20 max-w-6xl text-white'>
								{ numbersData.map(data => {
									return( <CounterItem {...data} key={ data.title }/> );
								}) }
							</div>
					</Section>
					<Section
						title='Visítanos'
						subtitle='No te quedes con la duda'>
							<div className='grid grid-cols-1 sm:grid-cols-[65%_35%] w-full border-t border-gray-200'>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.36621234067!2d-3.765263670713495!3d40.37857549165047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41884848a07e45%3A0x51008829fa8356d3!2sCalle+de+la+Casuarina%2C+20%2C+28044+Madrid!5e0!3m2!1ses!2ses!4v1502300703480"
									width="100%"
									height="570px"
									className='border-0'></iframe>

								<aside className='grid justify-center items-center gap-6 my-6'>
									<figure className='flex flex-col gap-4 justify-center items-center'>
										<h5 className='text-[1.65rem] leading-9 tracking-wider'>¿Dónde nos vemos?</h5>
										<span className='text-[0.95rem] opacity-60 font-[Helvetica] tracking-wider'>C/ Casuarina, 20</span>
										<span className='text-[0.95rem] opacity-60 font-[Helvetica] tracking-wider'>28044 Madrid</span>
										<span className='text-[0.95rem] opacity-60 font-[Helvetica] tracking-wider'>España</span>
									</figure>
									<figure className='flex flex-col gap-4 justify-center items-center'>
										<h5 className='text-[1.65rem] leading-9 tracking-wider'>Teléfono</h5>
										<span className='text-[0.95rem] opacity-60 font-[Helvetica] tracking-wider'>91 706 23 80</span>
									</figure>
									<figure className='flex flex-col gap-4 justify-center items-center'>
										<h5 className='text-[1.65rem] leading-9 tracking-wider'>Email</h5>
										<span className='text-[0.95rem] opacity-60 font-[Helvetica] tracking-wider'>contacto@arte19.com</span>
									</figure>
								</aside>
							</div>
					</Section>
				</main>
      <Footer />
		</>
	);
}