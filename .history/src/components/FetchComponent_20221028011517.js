import React from 'react'


function FetchComponent() {
  const data = () {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .tyhen
    let parsedata = data.json();
    console.log(parsedata);
  } 
  return (
    <div>
      Hello
    </div>
  )
}

export default FetchComponent;