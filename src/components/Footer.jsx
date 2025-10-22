import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
	faWhatsapp,
	faFacebook,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import '../assets/styles/Footer.css';
import '../assets/fonts/custom-font.css';

export default function Footer() {
	const redColor = '#FF0000';
	return (
		<footer
			style={{ backgroundColor: 'white', padding: '40px 0' }}
			className="custom-font"
		>
			<Container fluid>
				<Row className="align-items-center">
					{/* Logo */}
					<Col
						md={4}
						className="d-flex align-items-center justify-content-center"
					>
						<Image
							src="/src/assets/images/Logo.png"
							alt="Logo"
							fluid
							style={{ maxHeight: '80px', marginRight: '10px' }}
						/>
						<span className="fw-bold">BIKECORPS</span>
					</Col>

					{/* Contacto + Redes */}
					<Col md={8}>
						<Row>
							{/* Contacto */}
							<Col md={6} className="mb-3">
								<h5 style={{ color: redColor }}>Contacto</h5>
								<ul style={{ listStyle: 'none', padding: 0 }}>
									<li className="mb-2">
										<FontAwesomeIcon
											icon={faWhatsapp}
											style={{
												marginRight: '8px',
												color: redColor,
												fontSize: '1.5rem',
											}}
										/>
										WhatsApp
									</li>
									<li className="mb-2">
										<FontAwesomeIcon
											icon={faPhone}
											style={{
												marginRight: '8px',
												color: redColor,
												fontSize: '1.5rem',
											}}
										/>
										Atención al cliente: <strong>0800-444-3231</strong>
									</li>
									<li className="mb-2">
										<FontAwesomeIcon
											icon={faEnvelope}
											style={{
												marginRight: '8px',
												color: redColor,
												fontSize: '1.5rem',
											}}
										/>
										contacto@ejemplo.com
									</li>
								</ul>
							</Col>

							{/* Redes Sociales */}
							<Col md={6} className="mb-2">
								<h5 style={{ color: redColor }}>Redes Sociales</h5>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: '15px',
									}}
								>
									<div className="d-flex align-items-center">
										<FontAwesomeIcon
											icon={faFacebook}
											style={{
												color: redColor,
												marginRight: '10px',
												fontSize: '1.5rem',
											}}
										/>
										<span>Ejemplo</span>
									</div>
									<div className="d-flex align-items-center">
										<FontAwesomeIcon
											icon={faInstagram}
											style={{
												color: redColor,
												marginRight: '10px',
												fontSize: '1.5rem',
											}}
										/>
										<span>Ejemplo</span>
									</div>
									<div className="d-flex align-items-center">
										<FontAwesomeIcon
											icon={faTwitter}
											style={{
												color: redColor,
												marginRight: '10px',
												fontSize: '1.5rem',
											}}
										/>
										<span>Ejemplo</span>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<p className="text-center mb-0">
					© 2025 BIKECORPS. Todos los derechos reservados.
				</p>
			</Container>
		</footer>
	);
}
