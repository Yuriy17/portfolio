import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ParallaxTitle.css';

const ParallaxTitle = () => {
  return (
    <Container fluid>
      <Row noGutters={true}>
        <Col>
          <div className="description">
            <h2 className="title">Front-end developer</h2>
            <p>Develop using Javascript, React, HTML, CSS and I like it</p>
            <p>Ready to solve your tasks!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ParallaxTitle;
