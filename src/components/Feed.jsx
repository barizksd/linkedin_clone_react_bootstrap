import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCommentAlt, faShare } from '@fortawesome/free-solid-svg-icons';

const Feed = () => {
  const posts = [
    {
      id: 1,
      name: 'Eldho Raj',
      role: 'HR Manager',
      text: 'We are hiring React developers!',
      avatar: 'https://i.pinimg.com/736x/e9/5f/3d/e95f3d6f9c7abe38e9e2c1e306a073b1.jpg'
    },
    {
      id: 2,
      name: 'Steev',
      role: 'Tech Lead',
      text: "we are hiring gpt developer",
      avatar: 'https://i.pinimg.com/564x/a6/76/5b/a6765bb2f1701d1eafbb8e30605d0322.jpg'
    },
    {
      id: 3,
      name: 'Amarnath',
      role: 'Tech Lead',
      text: "Attending  this week! Looking forward to connecting with fellow experts. DM me if you'll be there too. #Networking #IndustryTrends",
      avatar: 'https://i.pinimg.com/originals/24/45/a4/2445a4f4fef2affb5d505cc482714838.jpg'
    },
    {
      id: 4,
      name: 'Amiya',
      role: 'Tech Lead',
      text: "One lesson I've learned in. What's your experience been? Would love to hear others' perspectives. #ProfessionalGrowth #Networking",
      avatar: 'https://i.pinimg.com/736x/ea/49/7d/ea497de62038ff3adc86482577803025.jpg'
    }
  ];

  return (
    <div className="feed">
      <Card className="create-post">
        <div className="post-input">
          <img 
            src="https://cdn-images.dzcdn.net/images/cover/797cb0b6a7031b1cad24c2abc6891f0e/0x1900-000000-80-0-0.jpg" 
            alt="User" 
            className="user-avatar"
          />
          <Button variant="outline-secondary" className="input-btn">
            Start a post
          </Button>
        </div>
      </Card>

      {posts.map(post => (
        <Card key={post.id} className="post-card">
          <div className="post-header">
            <img 
              src={post.avatar} 
              alt={post.name} 
              className="post-avatar"
            />
            <div>
              <h6>{post.name}</h6>
              <p>{post.role}</p>
            </div>
          </div>
          <Card.Body>
            <p>{post.text}</p>
          </Card.Body>
          <div className="post-actions">
            <Button variant="light">
              <FontAwesomeIcon icon={faThumbsUp} /> Like
            </Button>
            <Button variant="light">
              <FontAwesomeIcon icon={faCommentAlt} /> Comment
            </Button>
            <Button variant="light">
              <FontAwesomeIcon icon={faShare} /> Share
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Feed;