import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

import Name from './Name.js';
import Price from './Price.js';
import Description from './Description.js';
import Image from './Image.js';


const firstName = "John"; 
function App() {
  return (
    <Container className="py-5">
      <Card className="shadow-lg" style={{ width: '22rem', margin: '0 auto' }}>
        <Card.Body>
          <Image />
          <Card.Title className="mt-3"><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <h5>
          Hello, {firstName ? firstName : "there"}!
        </h5>

        {firstName && (
          <img
            src="https://via.placeholder.com/100?text=👋"
            alt="Greeting"
            className="mt-2"
            style={{ borderRadius: "50%" }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
