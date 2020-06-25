import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Work.css';

export default function Work(props) {
  const { url, title, description, img, githubUrl } = props.project;
  let githubLink = '';
  if (githubUrl) {
    githubLink = (
      <IconContext.Provider value={{ className: ' works-list__card-github-icon', size: '2.5rem' }}>
        <Card.Link href={githubUrl} className="works-list__card-link" target="__blank">
          <FaGithubSquare />
        </Card.Link>
      </IconContext.Provider>
    );
  }
  console.log(props);

  return (
    <Col className="works-list__column" xs={12} md={6} xl={4}>
      <Card border="info" className="works-list__card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="works-list__card-title">{title}</Card.Title>
          <Card.Text className="works-list__card-description">{description}</Card.Text>
          <div className="works-list__card-buttons-block">
            <Button className="works-list__card-button" href={url} variant="primary" target="__blank">
              Go to site
            </Button>{' '}
            {githubLink}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
