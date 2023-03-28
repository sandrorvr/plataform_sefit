import { useState } from 'react'
import './App.css'

import BoxOfWorkers from './components/boxOfWorkers';
import Modal from './components/modal';
import ModalForm from './components/modal/modalForm';
import ChartBar from './components/ChartBar';


function App() {
  

  return (
    <div className="App">
      <section className='container'>
        <section className='side-bar'></section>
          <BoxOfWorkers className='findWorkers'>
            <ModalForm/>
          </BoxOfWorkers>
          <ChartBar className='c0'></ChartBar>
          <ChartBar className='c1'></ChartBar>
          <ChartBar className='c2'></ChartBar>
      </section>

    </div>
  )
}

export default App
