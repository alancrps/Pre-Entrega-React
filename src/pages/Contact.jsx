import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../assets/fonts/custom-font.css';

export default function Contact() {
	return (
		<Container className="mt-5 mb-5 custom-font">
			<h1 className="text-center mb-4 fw-bold">Contacto</h1>
			<Row className="gy-4">
				{/* Información de contacto */}
				<Col md={5}>
					<h4 className="mb-3 fw-semibold">Comunicate con nosotros</h4>
					<p>
						<FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-danger fs-5" />
						Av. Libertador 1234, Buenos Aires
					</p>
					<p>
						<FontAwesomeIcon icon={faPhone} className="me-2 text-danger fs-5" />
						0800-444-3231
					</p>
					<p>
						<FontAwesomeIcon icon={faEnvelope} className="me-2 text-danger fs-5" />
						contacto@bikecorps.com
					</p>

					<h5 className="mt-4 fw-semibold">Seguinos</h5>
					<div className="d-flex gap-4 fs-3 mt-2">
						<a href="https://facebook.com" className="text-danger" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href="https://instagram.com" className="text-danger" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href="https://twitter.com" className="text-danger" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</div>
				</Col>

				{/* Formulario de contacto */}
				<Col md={7}>
					<h4 className="mb-3 fw-semibold">Enviános tu consulta</h4>
					<Form>
						<Row className="mb-3">
							<Col md>
								<Form.Group controlId="formName">
									<Form.Label>Nombre</Form.Label>
									<Form.Control type="text" placeholder="Tu nombre" required />
								</Form.Group>
							</Col>
							<Col md>
								<Form.Group controlId="formEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" placeholder="Tu correo" required />
								</Form.Group>
							</Col>
						</Row>

						<Form.Group className="mb-3" controlId="formPhone">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control type="tel" placeholder="Tu número de contacto" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formMessage">
							<Form.Label>Mensaje</Form.Label>
							<Form.Control as="textarea" rows={4} placeholder="Escribí tu consulta..." required />
						</Form.Group>

						<div className="text-end">
							<Button variant="danger" type="submit">Enviar</Button>
						</div>
					</Form>
				</Col>
			</Row>
			
		</Container>
		
	);
}
