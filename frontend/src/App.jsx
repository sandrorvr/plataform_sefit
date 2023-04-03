import { useState } from 'react'
import './App.css'

import BoxOfWorkers from './components/boxOfWorkers';
import Modal from './components/modal';
import ModalForm from './components/modal/modalForm';
import ChartBar from './components/ChartBar';
import Table from './components/Table';
import BoxContainer from './components/BoxContainer';

function App() {


  return (
    <div className="App">
      <section className='container'>
        <section className='side-bar'>

        </section>
        <div className='findWorkers'>
          <BoxContainer w='24rem' h='13rem'>
            <BoxOfWorkers>
              <ModalForm />
            </BoxOfWorkers>
          </BoxContainer>
        </div>
        <div className='c0'>
          <BoxContainer w='30rem' h='13rem'>
            <ChartBar />
          </BoxContainer>
        </div>
        <div className='area'>
            <Table></Table>
        </div>
      </section>
    </div>
  )
}

export default App
