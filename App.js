import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateList from './components/CandidateList';
import './index.css';

const App = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d'); 
      setCandidates(response.data.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  return (
    <div className="container">
      <CandidateList candidates={candidates} />
    </div>
  );
};

export default App;
