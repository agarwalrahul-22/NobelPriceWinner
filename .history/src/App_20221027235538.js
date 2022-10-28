import * as React from 'react';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <br/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;