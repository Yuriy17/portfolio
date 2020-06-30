import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import skills from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const skillsElements = skills.map((element) => (
    <Col xs={12} md={6} xl={4} className="skills__skill">
      <div className="skills__skill-icon-block">{element.icon}</div>
      <div className="skills__skill-description-block">
        <h2 className="skills__skill-title">{element.title}</h2>
      </div>
    </Col>
  ));
  return (
    <Container>
      <Row>{skillsElements}</Row>
    </Container>
  );
}
