import React, { useState } from 'react';
import JobForm from "./components/JobForm"; 
import JobCard from "./components/JobCard"; 
import DashboardStats from "./components/DashboardStats"; 
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (title, company) => {
    const newJob = { id: Date.now(), title, company, status: 'Pending' };
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="app-container">
      <h1>Job Tracker Pro</h1>
      <DashboardStats jobs={jobs} />
      <JobForm onAddJob={addJob} />
      <div className="job-list">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;