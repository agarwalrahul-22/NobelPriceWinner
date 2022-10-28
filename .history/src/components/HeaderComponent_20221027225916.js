import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
export default function HeaderComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "purple" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ textAlign: "center" }}
          >
            NOBLE PRICE WINNERS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}