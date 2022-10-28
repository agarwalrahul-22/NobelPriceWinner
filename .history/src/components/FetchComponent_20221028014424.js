import React, { useEffect, useState } from 'react'


function FetchComponent() {
  const [data, setData] = useState([]);
  const apiget = () => {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json.prices);
    });
  }
  const user = data.prizes.map((item) => {
    return <li>{item.year}</li>;
  });

  useEffect(() =>{
    apiget();
  }, []);

  return (
    <div>
      <ul>
        {user}
      </ul>
    </div>
  )
}

export default FetchComponent;