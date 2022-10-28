import * as React from 'react';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <Box className="App">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </Box>
  );
}

export default App;
