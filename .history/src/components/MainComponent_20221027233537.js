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
  var tmp = [];
  for (var i = 1900; i < this.props.level; i++) {
    tmp.push(i);
  }
  var indents = tmp.map(function (i) {
    return (
      <span className='indent'></span>
    );
  });
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Year"
            onChange={handleChangeSelect}
          >
            {
              for(var i=0;i<=2021;i++){
                <MenuItem value={1900+i}>1900+{i}</MenuItem>
              }
            }
          </Select>
        </FormControl>
      </span>
    </div>
  );
}
