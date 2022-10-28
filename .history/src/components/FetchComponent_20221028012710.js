import { Button } from '@mui/material';
import React from 'react'


function FetchComponent() {
  const [prizes, setPrices] = React.useState([]);
  const data = () => {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setPrices(json);
    })
  }

  React.useEffect(() =>{
    data();
  }, []);

  return (
    <div>
      <ul>
        {prizes.mapo}
      </ul>
    </div>
  )
}

export default FetchComponent;