import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Work.css';

export default function Work() {
  return (
    <Col xs={12} md={6} xl={4}>
      <Card className="works-list__card">
        <Card.Img variant="top" src="./assets/img/fancy-weather.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
