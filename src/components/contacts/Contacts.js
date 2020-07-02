import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { DiGithubAlt } from 'react-icons/di';
import { FaTelegramPlane } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import './Contacts.css';

export default function Contacts() {
  return (
    <Container>
      <Row className="contacts justify-content-center">
        <Col className="contacts-wrapper" xs={12} md={10} xl={8}>

          <Image className="image" src="static/media/photo.jpeg" roundedCircle />
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
              <a href="https://www.linkedin.com/in/yuriyshilenkov/" target="__blank" className="icons-icon-circle">
                <IconContext.Provider value={{ className: 'icons-icon', size: '2rem' }}>
                  <GrLinkedinOption />
                </IconContext.Provider>
              </a>
              <a href="https://github.com/Yuriy17" target="__blank" className="icons-icon-circle">
                <IconContext.Provider value={{ className: 'icons-icon', size: '2.5rem' }}>
                  <DiGithubAlt />
                </IconContext.Provider>
              </a>
              <a href="https://t.me/yuriy821" target="__blank" className="icons-icon-circle">
                <IconContext.Provider value={{ className: 'icons-icon', size: '2rem' }}>
                  <FaTelegramPlane />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
