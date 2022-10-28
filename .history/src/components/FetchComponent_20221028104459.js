import React, { useEffect, useState } from 'react'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "id", label: "Id", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "year", label: "Year", minWidth: 100 },
  { id: "category", label: "Category", minWidth: 170 },
];

function createData(id, name, year, category) {
  return { name, year, category };
}
const FetchData = [];
const rows = FetchData.map((item) => {
    const laureats = item.laureats.map((lauret) =>{
      create
    })
    return (
      <li key={Math.random()}>{item.year}</li>
      
    );
});

function FetchComponent() {
  const [data, setData] = useState([]);
  const apiget = () => {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json.prizes);
      FetchData = json.prizes;
    });
  }
  const user = data.map((item) => {
    return <li key={Math.random()}>{item.year}</li>;
  });

  useEffect(() =>{
    apiget();
  }, []);

  return (
    <div>
      <ul>
        {user}
      </ul>
    </div>
  )
}

export default FetchComponent;