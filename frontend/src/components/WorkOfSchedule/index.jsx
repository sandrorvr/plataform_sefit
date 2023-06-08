import { Fragment, useState, useEffect} from "react";
import './style.css';
//import BoxContainer from "../BoxContainer";
import NewTable from "../newTable";
import ControllerStateInit from "../../controller/ControllerStateInit";

function getInfoWorkers(){
    const road = document.getElementsByClassName('line_road')
    const begin = document.getElementsByClassName('line_begin')
    const end = document.getElementsByClassName('line_end')
    const func = document.getElementsByClassName('line_func')
    const loc = document.getElementsByClassName('line_loc')
    const eqp = document.getElementsByClassName('line_eqp')
    const wk = document.getElementsByClassName('line_wk')
    const result = []
    for(let line=0; line<road.length; line++){
        result.push(
            {
                road:road[line].innerText,
                begin: begin[line].innerText,
                end: end[line].innerText,
                func: func[line].innerText,
                loc: loc[line].innerText,
                eqp: eqp[line].innerText,
                wk: wk[line].innerText
            }
        )
    }
    console.log(result)
}

function WorkOfSchedule({state}){
    const [roadMap, setRoadMap] = useState([]);

    useEffect(() => {
        console.log('start')
        if(state != 'new'){
            new ControllerStateInit()
            .createAreas()
            .then((data)=>setRoadMap(data))
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
                        <div key={section.id} className='group'>
                            <NewTable 
                                servidores={section.servidores} 
                                area={section.area}
                                description={section.desc}
                                supervision={section.sup}
                            ></NewTable>
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
            <button onClick={getInfoWorkers}>GET INFO</button>
        </div>

    );
}

export default WorkOfSchedule;