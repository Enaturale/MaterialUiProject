import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function UseForm(initialfvalues) {
  const [values, setValues] = useState(initialfvalues);
  const [errors, setErrors] = useState({});

  //using an event parameter here to handle when the user tries to enter data into the fullname textfield
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}

//styling the form
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
