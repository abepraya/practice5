import React from "react";
import Logo from "../../atom/Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import DrawerToggle from "../Navigation/SideDrawer/DrawerToggle/DrawerToggle";

import classes from './Toolbar.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
        <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
  );
};

export default toolbar;
