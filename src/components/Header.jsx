import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Image, Navbar, Container, Button, Nav } from 'react-bootstrap';

import '../assets/styles/Header.css';
import '../assets/fonts/custom-font.css';

import Logo from '../assets/images/Logo.png';
import ArgentinaFlag from '../assets/images/Argentina-flag.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
	const navigate = useNavigate();
	const isAuth = localStorage.getItem('auth') === 'true';

	const cerrarSesion = () => {
		localStorage.removeItem('auth');
		navigate('/login');
	};

	return (
		<Navbar bg="white" expand="lg" className="custom-font border-bottom py-2">
			<Container fluid>
				<Navbar.Brand href="/" className="d-flex align-items-center text-dark">
					<Image
						src={Logo}
						alt="BikeCorps"
						width="60"
						height="60"
						className="me-2"
					/>
					<span className="fw-bold">BIKECORPS</span>
					<span className="d-flex align-items-center">
						<div
							style={{
								width: '1px',
								height: '40px',
								backgroundColor: 'black',
								margin: '0 12px',
							}}
						></div>
						<Image
							src={ArgentinaFlag}
							alt="Bandera Argentina"
							width="30"
							height="30"
							className="me-2"
						/>
						<span>ARGENTINA</span>
					</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav" className="justify-content-end">
					<Nav className="align-items-center">
						<Nav.Link as={Link} to="/" className="navlink-inicio mx-2">
							Inicio
						</Nav.Link>
						<Nav.Link as={Link} to="/products" className="navlink mx-2">
							Productos
						</Nav.Link>
						{/* <Nav.Link as={Link} to="/oferta" className="navlink mx-2">
							En Oferta
						</Nav.Link> */}
						<Nav.Link as={Link} to="/contact" className="navlink mx-2">
							Contacto
						</Nav.Link>
						<Nav.Link as={Link} to="/cart" className="text-dark mx-2">
							<FontAwesomeIcon icon={faCartShopping} size="lg" />
						</Nav.Link>
						{isAuth && (
							<>
								<Nav.Link as={Link} to="/profile/usuario123">
									Perfil
								</Nav.Link>
								<Nav.Link as={Link} to="/admin">
									Admin
								</Nav.Link>
							</>
						)}
						{!isAuth ? (
							<Button
								href="/login"
								variant="danger"
								className="ms-3 fw-bold text-white px-3"
							>
								Login
							</Button>
						) : (
							<Button variant="outline-dark" onClick={cerrarSesion}>
								Cerrar sesión
							</Button>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
