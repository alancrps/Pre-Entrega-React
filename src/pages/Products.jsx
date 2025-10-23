import React from 'react';
import ProductList from '../components/ProductList';
import { Container } from 'react-bootstrap';

const Products = () => {
	return (
		<Container className="mt-5 text-center">
				<h2>Nuestras motos destacadas</h2>
				<p>Explorá nuestra selección de motos más populares.</p>
                <ProductList/>
			</Container>
	);
};

export default Products;
