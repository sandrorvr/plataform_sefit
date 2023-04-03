import { useState, useEffect} from 'react'
import './style.css';

import Modal from '../modal'


function BoxOfWorkers({children}) {
    const [user, setUser] = useState([]);
    const [stateModal, setStateModal] = useState(false);

    const getData = async () =>{
      const raw = await fetch('http://127.0.0.1:8000/api/v1/servidores/');
      const data = await raw.json();
      setUser(data.map((e)=>e.name));
      //console.log(data.map((e)=>e.name));
    };


    useEffect(() => {getData()},[]);

    return (
            <div className='workers'>
                <Modal isOpen={stateModal} controllerMoldal={()=>{setStateModal(!stateModal)}}>
                    {children}
                </Modal>
                {user.map((wk, i) => {
                    return (
                        <div className='worker' key={i} onClick={()=>setStateModal(true)}>
                            <div className='circle'></div>
                            <span>{wk}</span>
                        </div>
                    );
                })}
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