import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faBookmark, faHashtag } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Card className="profile-card">
        <div className="profile-banner"></div>
        <img 
          src="https://cdn-images.dzcdn.net/images/cover/797cb0b6a7031b1cad24c2abc6891f0e/0x1900-000000-80-0-0.jpg" 
          alt="Profile" 
          className="profile-img"
        />
        <h5>Oggy</h5>
        <p>Software Developer</p>
        
        <ListGroup variant="flush">
          <ListGroup.Item className="connection-item">
            <span>Connections</span>
            <strong>432</strong>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="recent-card">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <FontAwesomeIcon icon={faHashtag} className="icon" />
            <span>reactjs</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon icon={faHashtag} className="icon" />
            <span>developer</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Sidebar;