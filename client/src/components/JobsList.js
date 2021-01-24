import React, { useState, useEffect } from "react";
import axios from "axios";
import NewJobForm from "./NewJobForm";
import Job from "./Job";

const JobsList = (props) => {
  useEffect(() => {
    axios.get("/api/v1/jobs.json").then((res) => {
      setJobs(res.data);
    });
  }, []);

  const [jobs, setJobs] = useState([]);

  const initialFormState = {
    company: "",
    position: "",
    description: ""
  };

  const addJob = (job) => {
    const qs = require("qs");
    axios
      .post(
        "/api/v1/jobs",
        qs.stringify({
          job: {
            company: job.company,
            position: job.position,
            description: job.description
          }
        })
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    setJobs([...jobs, job]);
  };

  return (
    <div>
      <div className="jobs-list">
        <div>
          <NewJobForm addJob={addJob} initialFormState={initialFormState} />
        </div>
        <br />
        <hr />
        <div>
          {jobs.map((job, i) => (
            <Job job={job} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default JobsList;
