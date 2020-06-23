import React from 'react';
import { Container, Row } from 'react-bootstrap';
import projectsData from '../../data/projects.json';
import Work from './Work';

export default function WorkList() {
  const workList = [];
  for(let project in Object.keys(projectsData)){
    workList.push(<Work project={project}/>)
  }

  return (
    <Container className="works-list">
      <Row>
        {workList}
      </Row>
    </Container>
  )
}
