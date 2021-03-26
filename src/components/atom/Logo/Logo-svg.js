import React from "react";
import medicalLogo from "../../../assets/images/pharmacy-logo.png";
import classes from './Logo.css'

const logoSvg = () => (
  <div className={classes.Logo}>
    <img src={medicalLogo} alt="Pharmacy Logo"/>
  </div>
);

export default logoSvg;
