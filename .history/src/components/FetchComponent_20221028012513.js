import { Button } from '@mui/material';
import React from 'react'


function FetchComponent() {
  const [prices, setPrices] = React.useState([]);
  const data = () => {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .then((json) => {
      
    })
  }
  return (
    <div>
      <Button onClick={data}> Click here</Button>
    </div>
  )
}

export default FetchComponent;