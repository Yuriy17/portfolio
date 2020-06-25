import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaGithubSquare } from 'react-icons/fa';
import './Work.css';


export default function Work(props) {
  const {url, title, description, img, githubUrl} = props.project;
  let githubLink = '';
  if(githubUrl) {
    githubLink = <Card.Link href={githubUrl} className="works-list__card-link" target="__blank"><FaGithubSquare /></Card.Link>
  }
  console.log(props);
  
  return (
    <Col className="work-list__column" xs={12} md={6} xl={4}>
      <Card border="info" className="works-list__card">
         <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="works-list__card-title">{title}</Card.Title>
          <Card.Text className="works-list__card-description">{description}</Card.Text>
          <Button className="works-list__card-button" href={url} variant="primary" target="__blank">Go to site</Button> {' '}
          {githubLink}
        </Card.Body>
      </Card>
    </Col>
  );
}
