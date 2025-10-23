import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // por si no lo tienes importado aún

const HomeSection = () => {
	const images = [
		{
			src: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/motorcycle-1951269_1280.jpg',
			caption: 'Descubrí tu próxima moto',
			description: 'Las mejores marcas, al mejor precio',
		},
		{
			src: 'https://cdn.pixabay.com/photo/2016/11/29/01/08/motorbike-1867058_1280.jpg',
			caption: 'Potencia y estilo',
			description: 'Explorá nuestras motos deportivas',
		},
		{
			src: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/motorbike-604592_1280.jpg',
			caption: 'Tu viaje empieza aquí',
			description: 'Conocé nuestras motos urbanas',
		},
	];

	return (
		<Carousel fade interval={3000} controls indicators>
			{images.map((item, index) => (
				<Carousel.Item key={index}>
					<img
						className="d-block w-100"
						src={item.src}
						alt={item.caption}
						style={{
							height: '80vh',
							objectFit: 'cover',
							filter: 'brightness(85%)',
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
