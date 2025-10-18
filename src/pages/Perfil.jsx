import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


export default function Perfil(){
    const {id} = useParams();
    return(
        <Container>
            <h2>Perfil de usuario</h2>
            <p>Bienvenido {id}</p>
        </Container>
    )
}