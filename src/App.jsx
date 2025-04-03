import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Container>
          <Row>
            <Col md={3} className="d-none d-md-block">
              <Sidebar />
            </Col>
            <Col md={6}>
              <Feed />
            </Col>
            <Col md={3} className="d-none d-md-block">
              <Widgets />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;