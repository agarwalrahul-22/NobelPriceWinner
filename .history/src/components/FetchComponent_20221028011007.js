import React from 'react'
function FetchComponent() {
  const data = fetch("https://api.nobelprize.org/v1/prize.json");
  let parsedata = await data.json();
  console.log(parsedata);
  return (
    <div>
      Hello
    </div>
  )
}

export default FetchComponent;