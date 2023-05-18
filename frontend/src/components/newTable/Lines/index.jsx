import React from "react";
import './style.css';

export const ReadOnlyRow = ({ worker, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{worker.roteiro}</td>
      <td>{`${worker.entrada}H`}</td>
      <td>{`${worker.saida}H`}</td>
      <td>{worker.funcao}</td>
      <td>{worker.local}</td>
      <td>{worker.equipamento}</td>
      <td>{worker.guarnicao}</td>
      <td>
        <button onClick={(event) => handleEditClick(event, worker)}
          type="button"
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(worker.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export const EditableRow = ({ editFormData, handleCancelClick, handleEditFormChange}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a road map"
          name="roteiro"
          value={editFormData.roteiro}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter begin hour..."
          name="entrada"
          value={editFormData.entrada}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a end hour..."
          name="saida"
          value={editFormData.saida}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a local..."
          name="local"
          value={editFormData.local}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a function..."
          name="funcao"
          value={editFormData.funcao}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an equipment..."
          name="equipamento"
          value={editFormData.equipamento}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an worker..."
          name="guarnicao"
          value={editFormData.guarnicao}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};