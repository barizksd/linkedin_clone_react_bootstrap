import React from 'react';
import { Navbar, Form, InputGroup, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faHome, 
  faUserFriends, 
  faBriefcase, 
  faCommentAlt, 
  faBell 
} from '@fortawesome/free-solid-svg-icons';

// Define NavLink as a separate component BEFORE using it
const NavLink = ({ icon, text, active = false }) => (
  <Nav.Link className={`d-flex flex-column align-items-center ${active ? 'active' : ''}`} style={{ minWidth: '80px' }}>
    <FontAwesomeIcon icon={icon} className="mb-1" />
    <span className="small">{text}</span>
  </Nav.Link>
);

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="border-bottom">
      <div className="d-flex align-items-center m-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          width="40"
          height="40"
          alt="LinkedIn"
          className="me-2"
        />
        
        <Form className="bg-light rounded">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control 
              type="text" 
              placeholder="Search" 
              className="border-0 bg-light"
            />
          </InputGroup>
        </Form>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink icon={faHome} text="Home" active />
          <NavLink icon={faUserFriends} text="Network" />
          <NavLink icon={faBriefcase} text="Jobs" />
          <NavLink icon={faCommentAlt} text="Messaging" />
          <NavLink icon={faBell} text="Notifications" />
          <Nav.Link className="d-flex flex-column align-items-center" style={{ minWidth: '80px' }}>
            <img 
              src="https://wallpapers.com/images/hd/oggy-cartoon-character-happy-pose-895zgbwgi04dw0uq-2.png" 
              alt="Profile" 
              width="35"
              height="35"
              className="rounded-circle mb-1"
            />
            <span className="small">Me</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;