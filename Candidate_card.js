import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const CandidateCard = ({ candidate, status }) => {
  return (
    <Card className={`card ${status}`}>
      <Card.Body>
        <Card.Title>{candidate.name}</Card.Title>
        <Card.Text>
          <strong>Last Updated:</strong> {candidate.last_updated_at}
        </Card.Text>
        <Card.Text>
          <strong>Location:</strong> {candidate.location}
        </Card.Text>
        <Card.Text>
          <strong>Gender:</strong> {candidate.gender}
        </Card.Text>
        <Badge variant="light">{candidate.status}</Badge>
      </Card.Body>
    </Card>
  );
};

export default CandidateCard;
