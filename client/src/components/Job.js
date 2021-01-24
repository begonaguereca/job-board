import React from "react";

const Job = ({ job }) => (
  <div className="job" key={job.id}>
    <h4>{job.company}</h4>
    <p>{job.position}</p>
    <p>{job.description}</p>
  </div>
);

export default Job;
