import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import SignIn from "../../components/auth/SignIn";

import logo from "../../assets/img/SecureMode_Logo.png"
import vidSrc from "../../assets/vid/cc.mp4"

import "./SignIn.css"

const SignInPage = () => (
  <React.Fragment>
    <Helmet title="Sign In" />
    <div className="text-center mt-4">
      <h2>Welcome back!</h2>
      <img src={logo} alt="Logo" className="img-fluid logo" style={{ maxWidth: "75px" }} />
      <p className="lead">Use your domain account to log in</p>
    </div>

    <Card>
      <Card.Body>
        <div className="m-sm-3">
          <SignIn />
        </div>
      </Card.Body>
    </Card>
    {/* <div className="text-center mb-3">
      Don't have an account? <Link to="/auth/sign-up">Sign up</Link>
    </div> */}
    {/* <div className="video-container">
      <video id="bgvid" autoPlay muted loop>
        <source src={vidSrc} type="video/mp4" />
      </video>
    </div> */}
  </React.Fragment>
);

export default SignInPage;
