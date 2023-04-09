import { useState, useEffect} from 'react'
import './App.css'

import BoxOfWorkers from './components/boxOfWorkers';
import Modal from './components/modal';
import ModalForm from './components/modal/modalForm';
import ChartBar from './components/ChartBar';
import Table from './components/Table';
import BoxContainer from './components/BoxContainer';
import WorkOfSchedule from './components/WorkOfSchedule';

//<WorkOfSchedule data={data} servidores={servidores}/>
function App() {
  const [data, setData] = useState([]);
  const [servidores, setservidores] = useState([{}]);

  /*async function getData(date) {
    const url = 'http://localhost:3000/esc';
    const res = await fetch(url);
    const newData = await res.json();
    const area = await newData.filter((e)=>date === e.date)
    //const upservidores = await area[0].servidores
    setData(area[0].areas);
  }


  useEffect(() => {
    getData('08-04-2023')
  }, [])*/

  //data={data} servidores={servidores}
  return (
    <div className="App">
      <section className='container'>
        <section className='side-bar'>
        </section>
        <div className='area'>
          <WorkOfSchedule/>
        </div>
      </section>
    </div>
  )
}

export default App
