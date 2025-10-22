import React from 'react';
import ProductList from '../components/ProductList';
import { Container } from 'react-bootstrap';

const Products = () => {
	return (
		<Container className="my-5">
			<h1 className="mb-4 text-center">Nuestras Motos</h1>
			<ProductList />
		</Container>
	);
};

export default Products;
