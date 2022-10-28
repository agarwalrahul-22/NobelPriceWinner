import React, { useEffect, useState } from 'react'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import FilterComponent from './FilterComponent';
const columns = [
  { id: "id", label: "Id", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "year", label: "Year", minWidth: 100 },
  { id: "category", label: "Category", minWidth: 170 },
];

function createData(id, fname, lname, year, category) {
  var name;
  if (fname === "" && lname === "") name = "Not Known";
  else if (fname === "" && lname !== "") name = fname;
  else if (fname !== "" && lname === "") name = lname;
  else name = fname + " " + lname;
  return { id, name, year, category };
}

function FetchComponent() {
  // const [fetchData, setFetchData] = useState([]);
  const [page, setPage] = useState(0);
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [orirows, setOrirows] = useState([]);

  const rows = orirows.filter((product) => {
      if(!year && !category){
         return product;
      }else if(year && !category){
        return product.year === year;
      }else if(!year && category){
        
      }
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const apiget = () => {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      const frow=[];
      for (var i = 0; i < json.prizes.length; i++) {
        // console.log(json.prizes[i]);
        if(json.prizes[i].laureates){
        for (var k = 0; k < json.prizes[i].laureates.length; k++) {
          const dat = createData(
            json.prizes[i].laureates[k].id,
            json.prizes[i].laureates[k].firstname
              ? json.prizes[i].laureates[k].firstname
              : "",
            json.prizes[i].laureates[k].surname
              ? json.prizes[i].laureates[k].surname
              : "",
            json.prizes[i].year,
            json.prizes[i].category,
          );
          frow.push(dat);
        }}
      }
      setOrirows(frow);
    });
  }
  // console.log(rows);
  useEffect(() =>{
    apiget();
  },[]);

  function onfilteryear(val){
    console.log(val);
    setYear(val);
  }
  function onfiltercat(val) {
    console.log(val);
    setCategory(val);
  }

  return (
    <>
      <FilterComponent filteryear={onfilteryear} filtercat={onfiltercat}></FilterComponent>
      <Paper
        justifyContent="center"
        sx={{
          width: "70%",
          justifyContent: "center !important",
          overflow: "hidden",
          border: `2px solid black`,
          margin: `10px`,
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </>
  );
}

export default FetchComponent;