import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeSection = () => {
	const images = [
		{
			src: 'https://www.fondoshd.mx/wallpapers/honda-cbr-1000rr-3126.jpg',
			caption: 'Descubrí tu próxima moto',
			description: 'Las mejores marcas, al mejor precio',
		},
		{
			src: 'https://data.3dtuning.com/tun/L1IEo-HmCY.jpg',
			caption: 'Potencia y estilo',
			description: 'Explorá nuestras motos deportivas',
		},
		{
			src: 'https://wallpapers.com/images/hd/dirt-bike-sunset-view-ih1d6rcq64y3d0ap.jpg',
			caption: 'Tu aventura empieza ahora',
			description: 'Conocé nuestras motos enduro',
		},
	];

	return (
		<Carousel className='border-bottom' fade interval={3000} controls indicators>
			{images.map((item, index) => (
				<Carousel.Item key={index}>
					<img
						className="d-block w-100"
						src={item.src}
						alt={item.caption}
						style={{
							height: '80vh',
							objectFit: 'cover',
							filter: 'brightness(70%)',
						}}
					/>
					<Carousel.Caption>
						<h2>{item.caption}</h2>
						<p>{item.description}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default HomeSection;
