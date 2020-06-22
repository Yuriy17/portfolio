import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Work from './Work';

export default function WorksList() {
  const worksList = [];
  for (let i = 0; i < 12; i++) {
    worksList.push(<Work />)    
  }
  return (
    <Container className="works-list">
      <Row>
        {worksList}
      </Row>
    </Container>
  )
}
