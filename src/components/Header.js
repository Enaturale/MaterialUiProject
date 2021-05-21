import { AppBar, Toolbar , Grid, InputBase, IconButton, Badge, makeStyles} from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatIcon from '@material-ui/icons/Chat';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
    root:{
        backgroundColor: '#fff'
    },
    searchInput:{
        opacity: '0.6', 
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight: '8px'
        }
    },
    btnLabel:{
        backgroundColor: 'red'
    }

})

function Header(){
    const classes = useStyles();
    return(
        <AppBar position = "static" className = {classes.root}>
            <Toolbar>
                <Grid container alignItems = "center">
                    <Grid item>
                        <InputBase 
                        placeholder  = "Search Topics"
                        className = {classes.searchInput}
                        startAdornment = {<SearchIcon  fontSize = "small"/>}
                        />
                    </Grid>

                    <Grid item sm></Grid>

                    <Grid item>
                        <IconButton  >
                            <Badge badgeContent = {4} color ="secondary" >
                                <NotificationsNoneIcon  fontSize = "small"/>
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent = {3} color ="primary" >
                                <ChatIcon fontSize = "small" />
                            </Badge>
                        </IconButton>

                        <IconButton>
                           <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;