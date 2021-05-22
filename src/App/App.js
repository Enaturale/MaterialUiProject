import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';

import SideMenu from '../components/SideMenu';
import Employees from '../pages/Employees/employees';
import './App.css';


//theme customisation
const theme = createMuiTheme({
  palette:{
    primary:{
      main: "#3f51b5",
      light: "#7986cb"
    },
    secondary:{
      light: "#ff4081",
      main: "#f50057"
    },
    background:{
      default: "#f4f5fd"
    }
  }
})


//for the body after the side menu has taken space of 320px wide
const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'

  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

    <SideMenu />

    <div className={classes.appMain}>
      <Header />
      
     

      {/* the employee form */}
      <Employees />

    </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
