import { useState } from 'react'
import './App.css'

import BoxOfWorkers from './components/boxOfWorkers';
import Modal from './components/modal';
import ModalForm from './components/modal/modalForm';
import ChartBar from './components/ChartBar';
import Table from './components/Table';
import BoxContainer from './components/BoxContainer';
import WorkOfSchedule from './components/WorkOfSchedule';
function App() {


  return (
    <div className="App">
      <section className='container'>
        <section className='side-bar'>

        </section>
        <div className='area'>
          <WorkOfSchedule data={
            [
              {
                area:"Area1", 
                sup:"Ademário Gomes de Oliveira Junior",
                id:0, 
                desc:" Graça - Av. Centenário - Vale do Canela  - Comércio - Centro - Barris -  Garibaldi - Ondina - Barra - Rio Vermelho - Vasco da Gama - Ogunjá - Dique - Bonocô - Luis Anselmo - Sete Portas - Túnel Américo Simas"
              }
            ]}/>
        </div>
      </section>
    </div>
  )
}

export default App
