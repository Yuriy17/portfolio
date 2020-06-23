import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Work.css';


export default function Work(props) {
  const {url, title, description, img} = props.project;
  return (
    <Col xs={12} md={6} xl={4}>
      <Card className="works-list__card">
         <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="works-list__card-title">{title}</Card.Title>
          <Card.Text className="works-list__card-description">{description}</Card.Text>
          <Button className="works-list__card-button" href={url} variant="primary" target="__blank">Go to site</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
