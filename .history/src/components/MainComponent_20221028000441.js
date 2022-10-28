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
  const [year, setYear] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const handleChangeYear = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };
  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  var tmp = [];
  for (var i = 1900; i <=2022; i++) {
    tmp.push(i);
  }
  var years = tmp.map(year => {
    return (
      <MenuItem value={year}>{year}</MenuItem>
    );
  });

  var Cat = [
    "chemistry",
    "economics",
    "literature",
    "peace",
    "physics",
    "medicine",
  ];
  var categories = Cat.map((cat) => {
    return <MenuItem value={cat}>{cat}</MenuItem>;
  });
  return (
    <Box justifyContent="center" style={{margin:`20px`, border: `2px solid black`,borderRadius: `20px`, padding: `10px`, display:"flex", flexDirection:"row", width:`75%`, justifyContent:"center", alignContent: "center", alignItems: "center", alignSelf:"center"}}>
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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChangeYear}
        >
          {years}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Year"
          onChange={handleChangeCategory}
        >
          {categories}
        </Select>
      </FormControl>
    </Box>
  );
}
