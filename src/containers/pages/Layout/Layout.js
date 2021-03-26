import React,{useState} from 'react';
import {connect} from 'react-redux';

import SideDrawer from '../../../components/molekul/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../../components/molekul/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';

import classes from './Layout.css';

const layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }
    return (
        <Aux>
            <Toolbar isAuth={props.isAuthenticated} drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer isAuth={props.isAuthenticated} open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    )   
};

const mapStatetoProps = (state) => {
    return{
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStatetoProps)(layout);