import { useState } from 'react'
import './App.css'

import BoxOfWorkers from './components/boxOfWorkers';
import Modal from './components/modal';
import ModalForm from './components/modal/modalForm';

function App() {
 
  return (
    <div className="App">
      <section className='container'>
        <section className='side-bar'>

        </section>
        <section className='content'>
          <BoxOfWorkers>
            <ModalForm/>
          </BoxOfWorkers>
        </section>
      </section>

    </div>
  )
}

export default App
