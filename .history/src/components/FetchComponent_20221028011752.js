import React from 'react'


function FetchComponent() {
  const data = () => {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .then((json) => console.log(json))
  }
  return (
    <div>
      <Butt onClick={data}> Click here</Butt>
    </div>
  )
}

export default FetchComponent;