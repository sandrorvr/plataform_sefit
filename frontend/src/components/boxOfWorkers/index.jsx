import { useState } from 'react'
import './style.css';

function BoxOfWorkers() {
    const [user, setUser] = useState([])

    const getData = async () =>{
      const raw = await fetch('http://127.0.0.1:8000/api/v1/servidores/');
      const data = await raw.json();
      setUser(data.map((e)=>e.name));
      //console.log(data.map((e)=>e.name));
    }

    return (
        <div className="App">
            <div className='workers'>
                {user.map((wk, i) => {
                    return (
                        <div className='worker' key={i}>
                            <div className='circle'></div>
                            <span>{wk}</span>
                        </div>
                    );
                })}
            </div>
            <button onClick={getData}>GERAR</button>
        </div>
    );
}

function Waorker({}){
    return(
        <div>

        </div>
    );
}

export default BoxOfWorkers;