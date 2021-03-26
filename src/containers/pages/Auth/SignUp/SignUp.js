import React, { useState } from "react";

import Input from "../../../../components/atom/Input/Input";
import Button from "../../../../components/atom/Button/Button";
import { updateObject, checkValidity } from "../../../shared/utility";

import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

import classes from "./SignUp.css";

const signUp = (props) => {
  const [signUp,setSignUp] = useState({
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
      name: {
        elementType: "input",
        elementConfig: {
          type: "name",
          placeholder: "Full Name",
        },
        value: "",
        validation: {
          required: true,
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
      nik: {
        elementType: "input",
        elementConfig: {
          type: "input",
          placeholder: "Nomor Induk Kependudukan (NIK)",
        },
        value: "",
        validation: {
          required: true,
          mingLength: 6,
        },
        valid: false,
        touched: false,
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "input",
          placeholder: "Address",
        },
        value: "",
        validation: {
          required: true,
          mingLength: 6,
        },
        valid: false,
        touched: false,
      },
      citizen: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "indonesian", displayValue: "Indonesian" },
            { value: "foreigner", displayValue: "Foreigner" },
          ],
        },
        validation: {},
        value: "Indonesian",
        valid: true,
      },
  })

  const [isSignUp,setIsSignUp] = useState(false);

  const inputChangedHandler = (event, userForm) => {
    console.log("EVENT: ",event.target.value)
    console.log("PROPS: ",props)
    const updateForm =  updateObject(signUp,{
        [userForm] : updateObject(signUp[userForm],{
            value: event.target.value,
            valid: checkValidity(event.target.value, signUp[userForm].validation),
            touched: true
        })
    })
    setSignUp(updateForm);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuthSignUp(signUp.email.value,signUp.password.value);
  };

  const formElementArray = [];
  for(let key in signUp){
      formElementArray.push({
          id: key,
          config: signUp[key]
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
  return (
    <div className={classes.SignUp}>
      <form onSubmit={submitHandler}>
        <h1>Biodata</h1>
      {form}
      <Button btnType="Danger">REGISTER</Button>
      </form>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onAuthSignUp: (email,password,isSignUp)=> dispatch(actions.authSignUp(email,password,isSignUp))
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(signUp);
