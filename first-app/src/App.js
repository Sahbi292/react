import React from 'react';
import { Navbar, Container, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Mon App React</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Titre */}
        <Container className="my-4">
          <h1 className="text-center">Bienvenue sur mon application</h1>
        </Container>

        {/* Cartes */}
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>
                    Ceci est le contenu de la première carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text>
                    Ceci est le contenu de la deuxième carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text>
                    Ceci est le contenu de la troisième carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
