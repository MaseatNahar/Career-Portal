import React from "react";
import { useLocation } from "react-router-dom";
import JobCard from "../Jobnumbers/JobCard";

const Jobdetails = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const { education, email, phone_namber, job_title } = data;
  console.log(data);
  const handleClick = (data) => {
    //localStorage.setItem('dataKey', JSON.stringify(data));
    const storedData = localStorage.getItem("dataKey");

    const checkData = [];
    if (storedData) {
      const a = JSON.parse(storedData);
      //localStorage.setItem('dataKey', JSON.stringify(checkData));
      if (a.some((e) => e.id === data.id)) {
        // We found at least one object that we're looking for!
        console.log("find");
      }else{
        a.push(data);
        localStorage.setItem('dataKey', JSON.stringify(a));
      }
    } else {
      checkData.push(data);
      localStorage.setItem("dataKey", JSON.stringify(checkData));
    }
    //localStorage.getItem('dataKey',JSON.stringify(data));
  };

  return (
    <div>
      <h2>{education}</h2>
      <h2>{email}</h2>
      <h2>{job_title}</h2>

      <div>
        <button onClick={() => handleClick(data)}>Greet</button>
      </div>
    </div>
  );
};

export default Jobdetails;
