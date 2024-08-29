import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";

const Jobnumbers = () => {
  const data = useLoaderData();
 
  return (
    <div>
      <h1>featured Job</h1>
      <div className="row ">
        {data.job_postings.slice(0,4).map((j) => (
          <div className="col-md-6 mb-4" key={j.id}>
            <JobCard data={j} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobnumbers;
