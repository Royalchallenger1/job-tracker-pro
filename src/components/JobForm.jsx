import React, { useState } from 'react';

const JobForm = ({ onAddJob }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !company.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    onAddJob(title, company);
    setTitle('');
    setCompany('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Job Title" 
      />
      <input 
        value={company} 
        onChange={(e) => setCompany(e.target.value)} 
        placeholder="Company" 
      />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;