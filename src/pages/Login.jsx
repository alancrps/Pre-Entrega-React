import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';


export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('auth', 'true');
        navigate('/profile/usuario123');
    }

    return (
        <Container className="mt-5" style={{ maxWidth: 400 }}>
            <h2>Iniciar sesión</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su usuario" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>Iniciar Sesión</Button>
                    
            </Form>
        </Container>
    )
}