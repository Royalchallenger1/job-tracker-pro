// App.jsx
import { useState, useEffect } from 'react';
import JobForm from './components/JobForm . jsx';
import JobCard from './components/JobCard . jsx';
import DashboardStats from './components/DashboardStats. jsx';
import './App.css';

export default function App() {
  // 2. State Management for dynamic data
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // 6 & 7. LocalStorage & useEffect (Side Effects)
  // Retrieve data from persistent storage
  useEffect(() => {
    const savedJobs = localStorage.getItem("job_tracker_master");
    if (savedJobs) {
      // Use JSON.parse for clean retrieval
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  // Store data whenever the 'jobs' state changes
  useEffect(() => {
    localStorage.setItem("job_tracker_master", JSON.stringify(jobs));
  }, [jobs]);

  // 11. CRUD: Create Operation
  const addJob = (jobData) => {
    const newJob = { id: Date.now(), ...jobData };
    setJobs([...jobs, newJob]);
  };

  // 11. CRUD: Update Operation (Status)
  const updateJobStatus = (id, newStatus) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, status: newStatus } : job
    ));
  };

  // 11. CRUD: Delete Operation
  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  // 5. List Rendering with filtering for versatility
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header className="dashboard-header">
        <h1>💼 Job Tracker Pro Dashboard</h1>
        <DashboardStats jobs={jobs} />
      </header>
      
      {/* 13. File Structure Discipline (Component Organization) */}
      <section className="form-section">
        <h2><span className="plus">+</span> New Application</h2>
        {/* 4. Props Usage */}
        <JobForm onAddJob={addJob} />
      </section>

      <section className="list-section">
        <div className="list-header">
          <h2>Application Tracker</h2>
          {/* 3. Event Handling */}
          <input 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder="🔍 Search Title or Company..." 
            className="search-field"
          />
        </div>

        <div className="job-list">
          {/* 9. Conditional Rendering with ternary operator for "No Data" view */}
          {filteredJobs.length === 0 ? (
            <div className="no-data-msg">No applications found. Use the form above to add your first job listing!</div>
          ) : (
            // 5. List Rendering with unique key props
            filteredJobs.map(job => (
              <JobCard 
                key={job.id} 
                job={job} 
                onDelete={deleteJob} 
                onUpdateStatus={updateJobStatus} 
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}