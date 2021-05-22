import React, { useState, useEffect } from "react";
import {
  FormLabel,
  FormControl,
  Grid,
  makeStyles,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { UseForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/controls";

//for deisgn and validate the form


const genderItems = [
{id:'male' , title:'Male'},
{id:'female' , title:'Female'},
{id:'other' , title:'Other'},
]


const initialfvalues = {
  id: 0,
  fullname: "",
  email: "",
  gender: "male",
  city: "",
  mobile: "",
  departmentid: "",
  hireDate: new Date(),
  isPermanent: false,
};
function EmployeeForm() {
  // const classes = useStyles();
  const { values, setValues, handleInputChange } = UseForm(initialfvalues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
            <Controls.RadioGroup 
            name="gender"
            label = "Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
            />
            
          
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
