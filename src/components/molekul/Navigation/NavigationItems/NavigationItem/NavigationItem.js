import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationItem.css";

const navigationItems = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <Link to={props.link}>{props.children}</Link>
    </li>
  );
};

export default navigationItems;
