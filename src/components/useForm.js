import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";

export function UseForm(initialfvalues){
    const [values, setValues] = useState(initialfvalues); 

    //using an event parameter here to handle when the user tries to enter data into the fullname textfield
    const handleInputChange = e=>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return{
        values, 
        setValues,
        handleInputChange,
    }

}

//styling the form
const useStyles = makeStyles(theme=> ({
    root:{
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1),
        }
    }

}))

export function Form(props){
    const classes = useStyles(); 

    return(
        <form className ={classes.root} autoComplete = "off">
            {props.children}
        </form>

    )
}