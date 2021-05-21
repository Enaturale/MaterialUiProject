import { makeStyles, withStyles } from '@material-ui/core';
import React from 'react';


//jsx way of styling the sidemenu
const useStyles= makeStyles({
    sideMenu:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: 'brown',
    }
})


function SideMenu(){
    const classes = useStyles();

    return(
        <div className= {classes.sideMenu}></div>
    );

}

export default SideMenu;