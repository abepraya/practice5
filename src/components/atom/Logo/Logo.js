import React from "react";
import medicalLogo from "../../../assets/images/pharmacy-logo-white.png";
import classes from './Logo.css'

const logo = () => (
  <div className={classes.Logo}>
    <img src={medicalLogo} alt="Pharmacy Logo"/>
  </div>
);

export default logo;
