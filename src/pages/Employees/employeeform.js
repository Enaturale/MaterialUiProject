import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { UseForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/controls";
import * as employeeService from "../../services/employeeService";

//for deisgn and validate the form

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

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
  const { values, setValues, errors, setErrors, handleInputChange } =
    UseForm(initialfvalues);

  //validation for input
  const validate = () => {
    let temp = {}
    temp.fullName = values.fullName ? "" : "This field is required."
    temp.email = (/$^|.+@..+/).test(values.email) ? "" : "Email is not valid."
    temp.mobile = (values.mobile.length) > 9 ? "" : "Minimum of 10 numbers are required."
    temp.departmentId = values.departmentId !== 0 ? "" : "This field is required."

    setErrors({
      ...temp
    })

    return Object.values(temp).every(x => x == "")
  }

  //to handle the submit button
  const handleSubmit = e  => {
    e.preventDefault();
    if (validate()) window.alert("testing");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* A grid with two rows */}
      <Grid container>
        {/* First grid */}
        <Grid item xs={6}>
          {/* first item == text field for name */}
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange} 
            error={errors.fullName}
          />

          {/* second item == text field for email */}
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />

          {/* second item == text field for email */}
          <Controls.Input
            label="Mobile "
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />

          {/* second item == text field for city */}
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>

        {/* second grid */}
        <Grid item xs={6}>
          {/* first item == radio grooup */}
          <Controls.Radiogroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />

          {/* second item == select group */}
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />

          {/* third item == datepicker */}
          <Controls.DatePicker
            name="hireDate"
            label="Date of Hire"
            value={values.hireDate}
            onChange={handleInputChange}
          />

          {/* fourth item == checkbox */}
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          {/* for the submit Button */}
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
