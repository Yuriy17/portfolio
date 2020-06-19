import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
import { Container, Row, Col } from 'react-bootstrap';
import WorksList from './components/worksList/WorksList';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts';

import './App.css';
import ParallaxTitle from './components/layouts/ParallaxTitle';

const App = () => (
  <Container fluid >
    <Row noGutters={true}>
      <Col>
        <Header />
        <main className="main">
          <ParallaxTitle />
        </main>
        <Switch>
          <Route exact path="/" component={WorksList} />
          <Route path="/skills" component={Skills} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Col>
    </Row>
  </Container>
);

export default App;
