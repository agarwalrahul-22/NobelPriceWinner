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

function createData(id, fname, lname, year, category) {
  var name;
  if (fname === "" && lname === "") name = "Not Known";
  else if (fname === "" && lname !== "") name = fname;
  else if (fname !== "" && lname === "") name = lname;
  else name = fname + " " + lname;
  return { id, name, year, category };
}
// var FetchData = [];

// FetchData.map((item) => {
//   item.laureats.map((lauret) =>{
//     rows.push(createData(
//       lauret.id,
//       lauret.firstname ? lauret.firstname : "",
//       lauret.surname ? lauret.surname : "",
//       item.year,
//       item.category
//     ))
//   })
// });

function FetchComponent() {
  const [fetchData, setFetchData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
      console.log(json);
      setFetchData(json.prizes);
      const rows = [];

      for (var i = 0; i < fetchData.length; i++) {
        for (var k = 0; k < fetchData[i].laureats.length; k++) {
          const dat = createData(
            fetchData[i].laureats[k].id,
            fetchData[i].laureats[k].firstname
              ? fetchData[i].laureats[k].firstname
              : "",
            fetchData[i].laureats[k].surname
              ? fetchData[i].laureats[k].surname
              : "",
            fetchData[i].year,
            fetchData[i].category
          );
          rows.push(dat);
        }
      }

      console.log(rows);
      // FetchData = json.prizes;
    });
  }
  
  // const user = data.map((item) => {
  //   return <li key={Math.random()}>{item.year}</li>;
  // });

  useEffect(() =>{
    apiget();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
  );
}

export default FetchComponent;