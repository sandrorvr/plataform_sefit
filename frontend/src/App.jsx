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

  return (
    <div className="App">
      <section className='container'>
        <section className='side-bar'>
        </section>
        <div className='area'>
          <WorkOfSchedule state={'new'}/>
        </div>
      </section>
    </div>
  )
}

export default App
