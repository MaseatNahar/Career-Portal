import React, { useState } from "react";
import { useEffect } from "react";
import JobCard from "../Jobnumbers/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dataKey"));
    console.log(storedData);
    setJobs(storedData);
  }, []);

  return (
    <div>
     
        
        {jobs.map((j) => (
          <div className="col-md-6 mb-4" key={j.id}>
            <JobCard data={j} />
          </div>
        ))}
          
        
     
    </div>
  );
};

export default Jobs;
