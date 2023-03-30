import './style.css'

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>ROT</th>
          <th>HORÁRIO_EN</th>
          <th>HORÁRIO_SA</th>
          <th>PB</th>
          <th>EQUIP</th>
          <th>FUNÇÃO</th>
          <th>PREPOSTO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>06:00</td>
          <td>18:00</td>
          <td>Terreiro de Jesus</td>
          <td>vtr</td>
          <td>Guarnicao</td>
          <th onClick={(e)=>{
            const elemento = e.target;
            const value_elemento = elemento.innerHTML
            console.log(e.target.innerHTML = `<input type="text" value="${value_elemento}"/>`)
          }}>sandro Ribeiro dos santos nunior</th>
        </tr>
      </tbody>

    </table>
  );
}

export default Table;