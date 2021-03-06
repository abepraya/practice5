import React from "react";
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = [classes.InputElement];
  
    if(props.invalid && props.shouldValidate && props.touched){
      inputClasses.push(classes.Invalid);
    }
  
    if(props.invalid && props.touched){
      validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
    }
  
    switch (props.elementType) {
      case "input":
        inputElement = (
          <input
          //   className={classes.InputElement}
          className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        );
        break;
      case "textarea":
        inputElement = (
          <textarea
          //   className={classes.InputElement}
          className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        );
        break;
      case "select":
        inputElement = (
          <select
          //   className={classes.InputElement}
          className={inputClasses.join(' ')}  
            value={props.value}
            onChange={props.changed}
          >
          {props.elementConfig.options.map((option)=>(
              <option value={option.value} key={option.value}>{option.displayValue}</option>
          ))}
          </select>
        );
        break;
      default:
        inputElement = (
          <input
          //   className={classes.InputElement}
          className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
          />
        );
    }
    return (
      <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        {validationError}
      </div>
    );
  };
  
  export default input;
