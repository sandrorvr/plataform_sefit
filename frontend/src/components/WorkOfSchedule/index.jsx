import { Fragment, useState, useEffect} from "react";
import './style.css';
import Table from "../Table";
import BoxContainer from "../BoxContainer";
import NewTable from "../newTable";

function WorkOfSchedule({state}){
    const [roadMap, setRoadMap] = useState([]);

    useEffect(() => {
        if(state != 'new'){
            getData('08-04-2023')
        }else{
            setRoadMap(
                [
                    {
                        "id": 0,
                        "area": "Area1",
                        "sup": "",
                        "desc": "",
                        "servidores":[]
                    },
                    {
                        "id": 1,
                        "area": "Area2",
                        "sup": "",
                        "desc": "",
                        "servidores":[]
                    },
                    {
                        "id": 1,
                        "area": "Area3",
                        "sup": "",
                        "desc": "",
                        "servidores":[]
                    },
                    {
                        "id": 1,
                        "area": "Area4",
                        "sup": "",
                        "desc": "",
                        "servidores":[]
                    },
                    {
                        "id": 1,
                        "area": "Area5",
                        "sup": "",
                        "desc": "",
                        "servidores":[]
                    }
                ]
            )
        }
        
      }, [])

    async function getData(date) {
        const url = 'http://localhost:3000/esc';
        const res = await fetch(url);
        const newData = await res.json();
        const area = await newData.filter((e)=>date === e.date)
        setRoadMap(area[0].areas);
      }
    const [createRoadMap, setcreateRoadMap] = useState({
        id: '',
        area: '',
        sup: '',
        desc: '',
        servidores: [],
    });

    const submitRoadMap = (event)=>{
        event.preventDefault();
        const newRoadMap = {
            id: Math.floor(Math.random()*10000),
            area: createRoadMap.area,
            sup: createRoadMap.sup,
            desc: createRoadMap.desc,
            servidores: [],
        }
        const newRoadMaps = [...roadMap, newRoadMap];
        console.log(newRoadMaps);
        if (createRoadMap) setRoadMap(newRoadMaps);
    }

    const addNewRoadMap = (event) =>{
        event.preventDefault();
        const fildName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newdata = {...createRoadMap};
        newdata[fildName] = fieldValue;
        setcreateRoadMap(newdata);
    }
    return (
        <div className="schedule">
                {roadMap.map((section, index)=>{
                    return(
                        <div key={index} className='group'>
                            <NewTable servidores={section.servidores}></NewTable>
                        </div>
                    );
                })}
            <div className='add-new-section'>
                <form onSubmit={submitRoadMap}>
                    <input 
                        type="text" 
                        name="area" 
                        required="required" 
                        placeholder="Set New Area ..."
                        onChange={addNewRoadMap}
                    />
                    <input 
                        type="text" 
                        name="sup" 
                        required="required" 
                        placeholder="Set boss's name"
                        onChange={addNewRoadMap}
                    />
                    <input 
                        type="text" 
                        name="desc" 
                        required="required" 
                        placeholder="Set a description"
                        onChange={addNewRoadMap}
                    />
                    <button type="submit">ADD</button>
                </form>
            </div>
        </div>

    );
}

export default WorkOfSchedule;