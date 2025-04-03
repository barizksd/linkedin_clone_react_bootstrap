import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Widgets = () => {
  return (
    <div className="widgets">
      <Card>
        <Card.Header>
          <h5>LinkedIn News</h5>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Tech hiring slows</ListGroup.Item>
          <ListGroup.Item>Remote work stays</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Widgets;