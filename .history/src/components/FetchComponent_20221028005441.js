import React from 'react'
async function FetchComponent() {
  const data = await fetch("https://api.nobelprize.org/v1/prize.json");
  let parsedata
  console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default FetchComponent();