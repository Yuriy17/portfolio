import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
const Header = () => (
  <header className="header">
    <Container>
      <Row className="justify-content-between">
        <Col xs={12} md={"auto"} className="header__column-1">
          <h1 className="header__title">YURIY SHILENKOV</h1>
        </Col>
        <Col xs={12} md={"auto"} className="header__column-2">
          <Nav className="header__navbar" variant="tabs" activeKey="1" onSelect={handleSelect}>
            <Nav.Item eventKey="1" href="/">
              <Nav.Link className="header__nav-link" as={NavLink} exact to="/">
                Works List
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="2" href="/skills">
              <Nav.Link className="header__nav-link" as={NavLink} to="/skills">
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="3" href="/contacts">
              <Nav.Link className="header__nav-link" as={NavLink} to="/contacts">
                Contacts
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
