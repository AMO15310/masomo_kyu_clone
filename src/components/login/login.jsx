import React from "react";
import image1 from "../../assets/index.jpg";
import "./login.scss";
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="myPadd">
          <div className="left">
            <div className="icon">
              <img src={image1} alt="kyu icon" />
            </div>
            <div className="form">
              <input className="inp" placeholder="Username" />
              <input className="inp" placeholder="Password" />
              <button className="logButton">Log in</button>
              <div className="lost">Lost password?</div>
            </div>
          </div>
          <div className="right">
            <div className="title">
              <h2>NOTICE TO ALL STUDENTS</h2>
            </div>
            <div className="paragraph">
              All students are advised to log in to this portal using their
              Registration Numbers as username and national ID number/birth
              certificate number as the password. However, if you have changed
              your log in password to the student's portal from ID number to any
              other password, kindly use the new password that you created to
              also log in to Masomo portal. <br></br> For any assistance, kindly
              send an email to ictsupport@kyu.ac.ke
            </div>
            <button className="guest">Log in as a guest</button>
            <div className="cookies">
              {" "}
              <span>? </span>Cookies notice
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
