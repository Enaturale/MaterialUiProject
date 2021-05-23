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
  const { values, setValues, handleInputChange } = UseForm(initialfvalues);

  return (
    <Form>
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
          />

          {/* second item == text field for email */}
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />

          {/* second item == text field for email */}
          <Controls.Input
            label="Mobile "
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />

          {/* second item == text field for email */}
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
            <Controls.Button  text="Reset" color ="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
