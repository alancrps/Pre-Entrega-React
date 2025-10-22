// src/components/ProductCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ moto }) => {
	return (
		<Card className="shadow-sm d-flex flex-column align-items-center text-center h-100">
			<Card.Img
				variant="top"
				src={
					moto.image_url !== 'sin imagen'
						? moto.image_url
						: 'https://via.placeholder.com/300x200?text=Moto'
				}
				alt={`${moto.brand} ${moto.model}`}
				className="card-img-top"
				style={{ objectFit: 'cover', width: '100%', height: '200px' }}
			/>
			<Card.Body className="d-flex flex-column align-items-center justify-content-between">
				<Card.Title>{`${moto.brand} ${moto.model}`}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{moto.year}</Card.Subtitle>
				<Card.Text>
					{moto.description.length > 100
						? moto.description.slice(0, 100) + '...'
						: moto.description}
				</Card.Text>
				<h5>${moto.price.toLocaleString('es-AR')}</h5>
				<Button variant="dark" className="mt-auto">Ver más</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
