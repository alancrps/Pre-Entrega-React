import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ moto, addToCart }) => {
	return (
		<Card className="shadow-sm h-100 d-flex flex-column text-center">
			<Card.Img
				variant="top"
				src={
					moto.image_url !== 'sin imagen'
						? moto.image_url
						: 'https://via.placeholder.com/300x200?text=Moto'
				}
				alt={`${moto.brand} ${moto.model}`}
				style={{ objectFit: 'cover', width: '100%', height: '250px' }}
			/>
			<Card.Body className="d-flex flex-column justify-content-between">
				<div>
					<Card.Title className="fw-bold">{`${moto.brand} ${moto.model}`}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{moto.year}</Card.Subtitle>
					<Card.Text style={{ minHeight: '60px' }}>
						{moto.description.length > 100
							? moto.description.slice(0, 100) + '...'
							: moto.description}
					</Card.Text>
				</div>
				<div>
					<h5 className="fw-bold mt-3 mb-3">${moto.price.toLocaleString('es-AR')}</h5>
					<Button 
						variant="danger" 
						onClick={() => addToCart(moto)} 
						className="w-100"
					>
						Comprar
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
