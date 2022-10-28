import React from 'react'


function FetchComponent() {
  const [prizes, setPrizes] = React.useState([]);
  const data = () => {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setPrizes(json);
    });
  }

  React.useEffect(() =>{
    data();
  }, []);

  return (
    <div>
      <ul>
        {prizes.map((item) => {
          return (<li>{item.year}</li>);
        })}
      </ul>
    </div>
  )
}

export default FetchComponent;