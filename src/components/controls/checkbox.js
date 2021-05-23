import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckBox,
} from '@material-ui/core';

export default function Checkbox(props) {

  const { name, label, value, onChange } = props;

  const convertToEvent =(name, value) => ({
      target: {
          name, value
      }
  })

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckBox
            name={name}
            color="secondary"
            checked={value}
            onChange={ e => onChange(convertToEvent(name, e.target.checked))}
          />
        }
        label={label}
      />
    </FormControl>
  );
}
