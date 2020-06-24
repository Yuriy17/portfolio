import React from 'react';
import { Container, Row } from 'react-bootstrap';
import projectsData from '../../data/projects.json';
import Work from './Work';
import './WorkList.css';

export default function WorkList() {
  const workList = projectsData.map((project) => 
    <Work project={project} key={project.id} />
  );

  return (
    <Container className="work-list">
      <Row>
        {workList}
      </Row>
    </Container>
  )
}
