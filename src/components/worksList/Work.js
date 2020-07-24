import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Work.css';

export default function Work(props) {
  const { url, title, description, img, githubUrl } = props.project;
  const handleClick = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
    return false;
  };
  let githubLink = '';

  if (githubUrl) {
    githubLink = (
      <IconContext.Provider value={{ className: ' works-list__card-github-icon', size: '2.5rem' }}>
        <Card.Link href={githubUrl} className="works-list__card-link"  onClick={handleClick}>
          <FaGithubSquare />
        </Card.Link>
      </IconContext.Provider>
    );
  }

  return (
    <Col className="works-list__column" xs={12} md={6} xl={4}>
      <Card border="info" className="works-list__card">
        <Card.Img variant="top" src={img} alt={`${title} image`}/>
        <Card.Body>
          <Card.Title className="works-list__card-title">{title}</Card.Title>
          <Card.Text className="works-list__card-description">{description}</Card.Text>
          <div className="works-list__card-buttons-block">
            <Button className="works-list__card-button" href={url} variant="primary" onClick={handleClick}>
              Go to site
            </Button>{' '}
            {githubLink}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
