import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
import { Container, Row, Col } from 'react-bootstrap';
import WorksList from './components/worksList/WorksList';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts';

import './App.css';
import ParallaxTitle from './components/layouts/ParallaxTitle';

// function App() {
//   return (

//     <HashRouter>
//         <div>
//           <h1>Simple SPA</h1>
//           <ul className="header">
//             <li><NavLink exact to="/">Home</NavLink></li>
//             <li><NavLink to="/stuff">Stuff</NavLink></li>
//             <li><NavLink to="/contact">Contact</NavLink></li>
//           </ul>
//           <div className="content">
//             <Route  path="/" component={ WorksList }/>
//             <Route path="/stuff" component={Skills}/>
//             <Route path="/contact" component={Contacts}/>
//           </div>

//         </div>
//       </HashRouter>
//   );
// }

const App = () => (
  <Container>
    <Row>
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
