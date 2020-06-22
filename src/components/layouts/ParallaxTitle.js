import React from 'react';
import './ParallaxTitle.css';
import { Container, Row, Col } from 'react-bootstrap';

const ParallaxTitle = () => {
  return (
    <Container fluid>
      <Row noGutters={true}>
        <Col>
          <div className="description">
            <h2 className="title">Front-end developer</h2>
            <p>Develop using Javascript, React, HTML, CSS and I like it</p>
            <p>Ready to solve your task!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ParallaxTitle;
