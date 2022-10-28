import * as React from 'react';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
import { Box } from '@mui/material';
function App() {
  return (
    <Box className="App" center style={{alignContent: "center", alignItems:"center",  justifySelf:"center", justifyContent:"center", textAlign: "center"}}>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </Box>
  );
}

export default App;
