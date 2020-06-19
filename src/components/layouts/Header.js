import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import './Header.css';

const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
const Header = () => (
  <header className="header">
    <Container>
      <Row>
        <Col>
          <h1>YURIY SHILENKOV</h1>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <Nav.Item eventKey="1" href="/">
              <Nav.Link as={NavLink} exact to="/">
                Works List
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="2" href="/skills">
              <Nav.Link as={NavLink} to="/skills">
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="3" href="/contacts">
              <Nav.Link as={NavLink} to="/contacts">
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
