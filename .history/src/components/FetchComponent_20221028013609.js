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
  const user = data.map((item) => {
    return <li>{item.year}</li>;
  });
  React.useEffect(() =>{
    apiget();
  }, []);

  return (
    <div>
      <ul>
        {
        
        }
      </ul>
    </div>
  )
}

export default FetchComponent;