import { useState } from 'react'
import './App.css'

function App() {
  const [tx, setTx] = useState('xxxxxxxxxx')
  const getData = () =>{
    fetch('http://127.0.0.1:8000/api/v1/servidores')
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      setTx(data.name);
    });
  };
  return (
    <div className="App">
      <div>{tx}</div>
      <button onClick={getData}>butao</button>
    </div>
  )
}

export default App
