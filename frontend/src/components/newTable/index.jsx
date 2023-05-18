import './style.css'

import { Fragment, useState } from 'react';
import { ReadOnlyRow, EditableRow } from './Lines';

function NewTable({servidores, area, description, supervision}) {
	const [workers, setContacts] = useState(servidores);

  const [addFormData, setAddFormData] = useState({
	roteiro: "",
	entrada: "",
	saida: "",
	funcao:"",
	local: "",
	equipamento: "",
	guarnicao: "",
  });

  const [editFormData, setEditFormData] = useState({
	roteiro: "",
	entrada: "",
	saida: "",
	funcao:"",
	local: "",
	equipamento: "",
	guarnicao: "",
  });

  const [editWorkerId, setEditContactId] = useState(null);


  const handleAddFormChange = (event) => {
	event.preventDefault();

	const fieldName = event.target.getAttribute("name");
	const fieldValue = event.target.value;

	const newFormData = { ...addFormData };
	newFormData[fieldName] = fieldValue;

	setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
	event.preventDefault();

	const newWorker = {
	  id: Math.floor(Math.random()*10000),
	  roteiro: addFormData.roteiro,
	  entrada: addFormData.entrada,
	  saida: addFormData.saida,
	  funcao: addFormData.funcao,
	  local: addFormData.local,
	  equipamento: addFormData.equipamento,
	  guarnicao: addFormData.guarnicao,
	};

	const newWorkers = [...workers, newWorker];
	setContacts(newWorkers);
  };

  const handleEditClick = (event, worker) => {
	event.preventDefault();
	setEditContactId(worker.id);

	const formValues = {
	  roteiro: worker.roteiro,
	  entrada: worker.entrada,
	  saida: worker.saida,
	  funcao: worker.funcao,
	  local: worker.local,
	  equipamento: worker.equipamento,
	  guarnicao: worker.guarnicao,
	};

	setEditFormData(formValues);
  };

  const handleEditFormSubmit = (event) => {
	event.preventDefault();

	const editedWorker = {
	  id: editWorkerId,
	  roteiro: editFormData.roteiro,
	  entrada: editFormData.entrada,
	  saida: editFormData.saida,
	  funcao: editFormData.funcao,
	  local: editFormData.local,
	  equipamento: editFormData.equipamento,
	  guarnicao: editFormData.guarnicao,
	};

	const newWorkers = [...workers];

	const index = workers.findIndex((worker) => worker.id === editWorkerId);

	newWorkers[index] = editedWorker;

	setContacts(newWorkers);
	setEditContactId(null);
  };

  const handleCancelClick = () => {
	setEditContactId(null);
  };


  const handleDeleteClick = (workerId) => {
	const newWorkers = [...workers];

	const index = workers.findIndex((worker) => worker.id === workerId);

	newWorkers.splice(index, 1);

	setContacts(newWorkers);
  };

  const handleEditFormChange = (event)=>{
	event.preventDefault();
	const fieldName = event.target.getAttribute("name");
	const fieldValue = event.target.value;
	
	const newFormData = {...editFormData};
	newFormData[fieldName] = fieldValue;

	setEditFormData(newFormData);
  };
	return (
		<div className="box-area">
			<div className="title">
				<span className="short-title">{area}</span>
				<span className="title-description">{description}</span>
			</div>
			<form className="input-area" onSubmit={handleEditFormSubmit}>
				<table>
					<thead>
						<tr>
							<th>RoadMap</th>
							<th>Begin</th>
							<th>Finish</th>
							<th>Function</th>
							<th>Local</th>
							<th>Equipment</th>
							<th>Guarnição</th>
						</tr>
					</thead>
					<tbody>
					{workers.map((worker) => {
              return (
                <Fragment key={worker.id}>
                  {
                    editWorkerId === worker.id ? 
                    <EditableRow
                      editFormData={editFormData} 
                      handleCancelClick={handleCancelClick} 
                      handleEditFormChange={handleEditFormChange}
                    /> : 
                    <ReadOnlyRow  
                      worker={worker} 
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                      />
                  }
                </Fragment>
              );
            })}
					</tbody>
				</table>
			</form>
			<form className='addGuarnicao' onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="roteiro"
          required="required"
          placeholder="..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="entrada"
          required="required"
          placeholder="..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="saida"
          required="required"
          placeholder="..."
          onChange={handleAddFormChange}
        />
		<input
          type="text"
          name="funcao"
          required="required"
          placeholder="..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="local"
          required="required"
          placeholder="..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="equipamento"
          required="required"
          placeholder="..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="guarnicao"
          required="required"
          placeholder="..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
		</div>
	);
}

export default NewTable;