import React from 'react';

const StatCard = ({ title, value, color }) => (
  <div className="stat-card" style={{ borderLeft: `5px solid ${color}` }}>
    <h3>{value}</h3>
    <p>{title}</p>
  </div>
);

const DashboardStats = ({ jobs }) => {
  const total = jobs.length;
  const pending = jobs.filter(j => j.status === 'Pending').length;
  const interviewing = jobs.filter(j => j.status === 'Interviewing').length;

  return (
    <div className="dashboard-stats">
      <StatCard title="Total Jobs" value={total} color="#3498db" />
      <StatCard title="Pending" value={pending} color="#f1c40f" />
      <StatCard title="Interviewing" value={interviewing} color="#2ecc71" />
    </div>
  );
};

export default DashboardStats;