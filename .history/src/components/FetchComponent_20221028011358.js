import React from 'react'


function FetchComponent() {
  const data => {
    etch("https://api.nobelprize.org/v1/prize.json");
  let parsedata = data.json();
  console.log(parsedata);
  } f
  return (
    <div>
      Hello
    </div>
  )
}

export default FetchComponent;