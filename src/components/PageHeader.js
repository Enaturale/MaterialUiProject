import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor: '#fdfdff'
    },
    PageHeader:{
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2),
    },
    pageIcon:{
      display: 'inline-block',
      padding: theme.spacing(2),
      color: '#3c44bl'
      },

    pageTitle:{
      paddingLeft: theme.spacing(4),
      '&.MuiTypography-subtitle2': {
        opacity:'0.9'
      }
    }
}))

function PageHeader(props) {
  const { title, subtitle, icon } = props;
  const classes = useStyles();

  return (
    // the paper component which acts as a container
    <Paper elevation={0} square className = {classes.root}>
      <div className= {classes.PageHeader}>
        <Card className = {classes.pageIcon}> 
          {icon}
        </Card>

        <div className ={classes.pageTitle}>
          {/* typography is used to define headings */}
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default PageHeader;
