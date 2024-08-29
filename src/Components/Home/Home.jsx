import React from "react";
import Jobnumbers from "../Jobnumbers/Jobnumbers";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="Header-container">
        <div className="index">
          <h1>
            One Step <br /> Closer To Your <br />
            Dream Job{" "}
          </h1>
          <p>
            Explore thousands of job opportunities with all the
            <br /> information you need. Its your future. Come find it. Manage
            all <br />
            your job application from start to finish.
          </p>
        </div>

        <div>
          <img src="/src/assets/images/user.png" alt="" />
        </div>
      </div>
      <Jobnumbers></Jobnumbers>
      
    </div>
  );
};

export default Home;
