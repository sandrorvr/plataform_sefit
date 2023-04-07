import './style.css';
import { Fragment, useState } from "react";
import Table from "../Table";
import BoxContainer from "../BoxContainer";

function WorkOfSchedule(){
    const [roadMap, setRoadMap] = useState([{area:"", id:0}]);
    const [createRoadMap, setcreateRoadMap] = useState({
        area:'',
        sub:'',
        id:''
    });

    const submitRoadMap = (event)=>{
        event.preventDefault();
        const newRoadMap = [...roadMap, createRoadMap];
        if (createRoadMap) setRoadMap(newRoadMap);
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
                        <div key={index}>
                            <h3 id={section.id}>{section.area}</h3>
                            <Table/>
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
                        placeholder="Set New Area ..."
                        onChange={addNewRoadMap}
                    />
                    <button type="submit">ADD</button>
                </form>
            </div>
        </div>

    );
}

export default WorkOfSchedule;