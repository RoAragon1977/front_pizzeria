import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary text-light">
      <Container>
        <Row>
          <Col>
            <h4>Sobre Nosotros</h4>
            <p>Este es un espacio donde se puede contar
                sobre la misión del negocio, y de la manera
                que se elaboran los productos que se sirven,
                y la presentación de los intervinientes de
                la elaboración de dichos productos.
            </p>
          </Col>
          <Col>
            <h4>Menú</h4>
            <p>Contenido de la columna 2.</p>
          </Col>
          <Col>
            <h4>Últimas Publicaciones</h4>
            <p>Contenido de la columna 3.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer