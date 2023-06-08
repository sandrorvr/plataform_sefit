import './style.css'
import { useState, useEffect} from 'react';
import ControllerStateInit from "../../controller/ControllerStateInit";

function SelectWorkes() {
    const [servidores, setServidores] = useState([])

    useEffect(()=>{
        new ControllerStateInit()
        .createWorkers()
        .then((servidores) => setServidores(servidores))
    }, [])
    
    return (
        <>
            {
                servidores.map((servidor)=>{
                    return (
                        <div key={servidor.matricula} className="worker">
                            <div className="avatar">
                                <span>SJ</span>
                            </div>
                            <span>{servidor.name}</span>
                        </div>
                    );
                })
            }
        </>
    );
}

export default SelectWorkes;