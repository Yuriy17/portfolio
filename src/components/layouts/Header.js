import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <Container>
      <Row className="justify-content-between">
        <Col xs={12} md={"auto"} className="header__column-1">
          <h1 className="header__title">YURIY SHILENKOV</h1>
        </Col>
        <Col xs={12} md={"auto"} className="header__column-2">
          <Nav className="header__navbar" variant="tabs" activeKey="1">
            <Nav.Item>
              <Nav.Link className="header__nav-link" as={NavLink} exact to="/">
                Works List
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="header__nav-link" as={NavLink} to="/skills">
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="header__nav-link" as={NavLink} to="/contacts">
                Contacts
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Button className="cv-button" variant="info" href="/static/YuriyShilenkovResume.pdf" download>Download CV</Button>
    </Container>
  </header>
);

export default Header;
