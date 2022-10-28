import React from 'react'
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export default function MainComponent() {
  const [auth, setAuth] = React.useState(false);
  const [age, setAge] = React.useState('0000');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <span>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label="Filters"
          />
        </FormGroup>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChangeSelect}
        >
          {
            for(let i=0;i<=2021;i++){
              <MenuItem value={1900}>1900</MenuItem>
            }
          }
          
          <MenuItem value={1901}>1901</MenuItem>
          <MenuItem value={1902}>1902</MenuItem>
        </Select>
      </span>
    </div>
  );
}
