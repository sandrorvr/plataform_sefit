import React from "react";
import './style.css';

export const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.roteiro}</td>
      <td>{`${contact.entrada}H`}</td>
      <td>{`${contact.saida}H`}</td>
      <td>{contact.local}</td>
      <td>{contact.equipamento}</td>
      <td>{contact.guarnicao}</td>
      <td>
        <button onClick={(event) => handleEditClick(event, contact)}
          type="button"
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
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
          placeholder="Enter a name..."
          name="roteiro"
          value={editFormData.roteiro}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="entrada"
          value={editFormData.entrada}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="saida"
          value={editFormData.saida}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="equipamento"
          value={editFormData.equipamento}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
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