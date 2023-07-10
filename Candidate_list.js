import React from 'react';
import CandidateCard from './CandidateCard';

const CandidateList = ({ candidates }) => {
  const appliedCandidates = candidates.filter((candidate) => candidate.status === 'Applied');
  const acceptedCandidates = candidates.filter((candidate) => candidate.status === 'Accepted');
  const rejectedCandidates = candidates.filter((candidate) => candidate.status === 'Rejected');

  return (
    <div className="container">
      <div className="column">
        <h3>Applied</h3>
        {appliedCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} status="applied" />
        ))}
      </div>
      <div className="column">
        <h3>Accepted</h3>
        {acceptedCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} status="accepted" />
        ))}
      </div>
      <div className="column">
        <h3>Rejected</h3>
        {rejectedCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} status="rejected" />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
