import React from "react";
import EmployeeForm from "./employeeform";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    //backgroundColor : 'darksalmon'
  },
}));

function Employees() {
  const classes = useStyles();

  return (
    <>
      {/* the page header with title, icon and page description */}
      <PageHeader
        title="Femtech Employee Form"
        subtitle="Form design with Validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />

      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}

export default Employees;
