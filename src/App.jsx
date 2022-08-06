import React,{useState, useEffect} from 'react';
import './App.css';
import MyBar from './MyBar';
import MyCard from './MyCard';  
import './attractions.json';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://www.mecallapi.com/api/attractions/')
    .then(res => res.json())
    .then((result) => {setData(result)})

  }, []);

  return (
    <>
      <MyBar />
      <h1 style={{paddingLeft: "10px"}}>Attractions</h1>
      <div className="grid-container">
        {data.map(item => (
                      <MyCard key={item.id} name={item.name} coverimage={item.coverimage} detail={item.detail} />
        ))}
      </div>
    </>
  );
}

export default App;