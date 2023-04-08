import './style.css';
import { Fragment, useState } from "react";
import Table from "../Table";
import BoxContainer from "../BoxContainer";

function WorkOfSchedule({data}){
    const [roadMap, setRoadMap] = useState(data);
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
                        <div key={index} className='group'>
                            <BoxContainer w='' h=''>
                            <div id={section.id} className='title-group'>
                                <span className='id-area'>{section.area}</span>
                                <h3>{section.desc}</h3>
                            </div>
                            <Table/>
                            </BoxContainer>
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