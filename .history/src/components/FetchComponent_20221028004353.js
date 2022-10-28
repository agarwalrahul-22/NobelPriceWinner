import React from 'react'

export default function FetchComponent() {
  const data = fetch("https://api.nobelprize.org/v1/prize.json")
  .then((respo))
  ;
  return (
    <div>
      
    </div>
  )
}
