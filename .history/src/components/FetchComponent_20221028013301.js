import React from 'react'


function FetchComponent() {
  const [data, setData] = React.useState([]);
  const apiget = () => {
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json);
    });
  }

  React.useEffect(() =>{
    apiget();
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