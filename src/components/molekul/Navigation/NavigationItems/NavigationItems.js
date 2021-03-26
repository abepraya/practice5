import React from "react";

import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>HOME</NavigationItem>
      <NavigationItem link='/about'>ABOUT</NavigationItem>
      <NavigationItem link='/auth'>AUTH</NavigationItem>
    </ul>
  );
};

export default navigationItems;
