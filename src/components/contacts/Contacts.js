import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { GrLinkedinOption } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import './Contacts.css';

export default function Contacts() {
  return (
    <Container>
      <Row>
        <Col xs={2} md={3} xl={4}>
          <Image className="image" src="static/media/photo.jpeg" roundedCircle />
        </Col>
        <Col xs={10} md={9} xl={8}>
          <div className="info">
            <div class="info-title-block">
              <h2 className="info-title">Yuriy Shilenkov</h2>
              <h3 className="info-subtitle">Front-end Developer</h3>
            </div>
            <div className="description-block">
              <p className="description-birthday">
                <b>BORN:</b> May 17, 1996
              </p>
              <p className="description-email">
                <b>EMAIL:</b> <a href="mailto:yuriy_sh@zoho.com">yuriy_sh@zoho.com</a>
              </p>
            </div>
            <div className="icons-block">
              <span className="icons-icon-circle">
                <IconContext.Provider value={{ className: 'icons-icon', size: '2.5rem' }}>
                  <GrLinkedinOption />
                </IconContext.Provider>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
