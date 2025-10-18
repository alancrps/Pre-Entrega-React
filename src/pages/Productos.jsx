import { ListGroup, Container } from "react-bootstrap";


export default function Productos (){
    return(
        <Container className="mt-4">
            <h2>Productos disponibles</h2>
            <ListGroup>
                <ListGroup.Item>Producto 1</ListGroup.Item>
                <ListGroup.Item>Producto 1</ListGroup.Item>
                <ListGroup.Item>Producto 1</ListGroup.Item>
            </ListGroup>
        </Container>
    )
}