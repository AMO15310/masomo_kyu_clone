import React from "react";
import "./dashboard.scss";
import image from "../../assets/index.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dashboard = () => {
  return (
    <>
      <div className="dash">
        <div className="nav">
          <div className="logos">
            <img src={image} alt="logo" />
            <div className="home">Home</div>
            <div className="dashbod">Dashboard</div>
            <div className="myc">My courses</div>
          </div>
          <div className="texts">
            <div className="search">
              <span>
                search
                {/* <FontAwesomeIcon icon={["fab", "apple"]} /> */}
              </span>
            </div>
            <div className="names">
              <span>
                {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
              </span>
            </div>
            <div className="edit">edit</div>
          </div>
        </div>
        <div className="padd"></div>
      </div>
    </>
  );
};

export default Dashboard;
