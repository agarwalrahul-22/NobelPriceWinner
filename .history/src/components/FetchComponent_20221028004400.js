import React from 'react'

export default function FetchComponent() {
  const data = fetch("https://api.nobelprize.org/v1/prize.json")
  .then((response, PromiseRejectionEvent))
  ;
  return (
    <div>
      
    </div>
  )
}
