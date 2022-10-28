import * as React from 'react';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
import { Box } from '@mui/material';
function App() {
  return (
    <Box className="App" justifyContent="center">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </Box>
  );
}

export default App;
