import React, { useState } from "react";

import Input from "../../../components/atom/Input/Input";
import Button from "../../../components/atom/Button/Button";
import Spinner from "../../../components/atom/Spinner/Spinner";
import LogoSvg from "../../../components/atom/Logo/Logo-svg";

import {connect} from 'react-redux';
import { Redirect } from "react-router";
import * as actions from '../../store/actions/index'
import {updateObject,checkValidity} from '../../shared/utility';

import classes from "./Auth.css";

const auth = (props) => {
  const [login,setLogin] = useState({
    email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
    password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          mingLength: 6,
        },
        valid: false,
        touched: false,
      },
  })
  
  // const [isSignUp, setIsSignUp] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuthSignIn(login.email.value,login.password.value);
  };

  const inputChangedHandler = (event, userForm) => {
    const updateForm =  updateObject(login,{
        [userForm] : updateObject(login[userForm],{
            value: event.target.value,
            valid: checkValidity(event.target.value, login[userForm].validation),
            touched: true
        })
    })
    setLogin(updateForm);
  }

  const moveSignUpHandler = () => {
    console.log(props);
    // setIsSignUp(!isSignUp);
    props.history.push("/signup");
  };

  const formElementArray = [];
  for(let key in login){
      formElementArray.push({
          id: key,
          config: login[key]
      })
  };
  let form = formElementArray.map((formElement)=>(
      <Input
        className={classes.Input}
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => inputChangedHandler(event, formElement.id)}
      />
  ))

  if(props.loading){
      form = <Spinner/>
  }

  let errorMessage = null;
  if(props.error){
      errorMessage = <p>{props.error.message}</p>
  };

  let authRedirect = null;
  if(props.isAuthenticated){
      authRedirect = <Redirect to={props.authRedirectPath}/>
  }

  return (
    <div className={classes.Auth}>
      <div className={classes.Logo}>
      <LogoSvg/>
      </div>
      <h1>COVID-19 App</h1>
        {authRedirect}
        {errorMessage}
      <form onSubmit={submitHandler}>
          {form}
        <Button btnType="Login">SIGN IN</Button>
      </form>
      <Button btnType="Danger" clicked={() => moveSignUpHandler()}>
        SIGN UP
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.token !== null,
      authRedirectPath: state.auth.authRedirectPath
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onAuthSignIn: (email, password) => dispatch(actions.authSignIn(email, password)),
      onSetRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(auth);
