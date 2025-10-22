import React, { useEffect, useState } from 'react';
import { getMotos } from '../fetch/api';
import ProductCard from './ProductCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const ProductList = () => {
	const [motos, setMotos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchMotos = async () => {
			const data = await getMotos();
			setMotos(data);
			setLoading(false);
		};
		fetchMotos();
	}, []);

	if (loading) {
		return (
			<div className="text-center mt-5">
				<Spinner animation="border" variant="dark" />
				<p>Cargando motos...</p>
			</div>
		);
	}

	return (
		<Container className="mt-4">
			<Row className="justify-content-center">
				{motos.map((moto) => (
					<Col 
						key={moto.id} 
						md={4} 
						sm={6} 
						xs={12} 
						className="mb-4 d-flex justify-content-center"
					>
						<ProductCard moto={moto} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProductList;