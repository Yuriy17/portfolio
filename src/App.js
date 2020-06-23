import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layouts/Header';
import ParallaxTitle from './components/layouts/ParallaxTitle';
import Skills from './components/skills/Skills';
import WorkList from './components/worksList/WorkList';


const App = () => (
  <Fragment>
    <Header />
    <main className="main">
      <ParallaxTitle />
      <Switch>
        <Route exact path="/" component={WorkList} />
        <Route path="/skills" component={Skills} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </main>
  </Fragment>
);

export default App;
