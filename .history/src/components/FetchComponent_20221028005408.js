import React from 'react'
 function FetchComponent() {
  const data = fetch("https://api.nobelprize.org/v1/prize.json");
  console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default FetchComponent();