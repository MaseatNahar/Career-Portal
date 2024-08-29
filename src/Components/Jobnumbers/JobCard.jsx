import React from "react";
import { Link, useNavigate } from "react-router-dom";

const JobCard = (data) => {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate("/jobdetails",{state: {data:data.data}})
  }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={data.data.company_logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.data.job_title}</h5>
        <p className="card-text">
          {data.data.job_description}
        </p>
        <button
          // to={{ pathname: "/jobdetails", state: {name:'alfat'} }}
          onClick={handleClick}
          className="btn btn-primary"
        >
          Apply Here
        </button>
      </div>
    </div>
  );
};

export default JobCard;
