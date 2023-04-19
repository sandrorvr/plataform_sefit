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
      <section id="container">
        <div class="side-bar"></div>
        <div class="content">
            <header id="header-escale">
                <form action="">
                    <div id="config-scale" class="config-scale-items">
                        <div id="set-date-type">
                            <input type="date" name="date" id="date"></input>
                            <div class="row">
                            <select name="type-scale" id="type-scale">
                              <option value="fds">Final de Semana</option>
                              <option value="mensal">Mensal</option>
                              <option value="carnaval">Calanaval</option>
                              <option value="yemanja">Yemanja</option>
                            </select>
                            </div>
                        </div>
                        <div class="item-column">
                            <label for="defaut">Defaut</label>
                            <input id="defaut" type="radio" name="config" value="defaut"></input>
                        </div>
                        <div class="item-column">
                            <label for="lastScale">Last Scale</label>
                            <input id="lastScale" type="radio" name="config" value="lastScale"></input>
                        </div>
                        <div class="item-column">
                            <label for="empty">Empty</label>
                            <input id="empty" type="radio" name="config" value="empty"></input>
                        </div>
                    </div>
                </form>
                <form action="">
                    <div id="set-new-area" class="">
                        <div id="inputs-area">
                            <div class="row">
                                <select name="type-scale" id="type-scale">
                                    <option value="boos">Supervisor</option>
                                    <option value="cood">coordenador</option>
                                    <option value="area">Area</option>
                                    <option value="eqp">Equipamento</option>
                                </select>
                            </div>
                            <div class="row">
                                <input id="newArea" type="text" name="newArea" placeholder="id"></input>
                                <input id="value" type="text" name="value" placeholder="value"></input>
                            </div>
                            <div class="row">
                                <input id="description" type="text" name="description" placeholder="description"></input>
                            </div>
                        </div>
                        <button>add</button>
                    </div>
                </form>
            </header>
            <div id="areas">
              <WorkOfSchedule state={''}/>
            </div>
            <section id="workers">
                <div class="worker">
                    <div class="avatar">
                        <span>SJ</span>
                    </div>
                    <span>Sandro Ribiro Dos Santos Junior</span>
                </div>
                <div class="worker">
                    <div class="avatar">
                        <span>SJ</span>
                    </div>
                    <span>Sandro Ribiro Dos Santos Junior</span>
                </div>
                <div class="worker">
                    <div class="avatar">
                        <span>SJ</span>
                    </div>
                    <span>Sandro Ribiro Dos Santos Junior</span>
                </div>
                <div class="worker">
                    <div class="avatar">
                        <span>SJ</span>
                    </div>
                    <span>Sandro Ribiro Dos Santos Junior</span>
                </div>
                <div class="worker">
                    <div class="avatar">
                        <span>SJ</span>
                    </div>
                    <span>Sandro Ribiro Dos Santos Junior</span>
                </div>
                <div class="worker">
                    <div class="avatar">
                        <span>SJ</span>
                    </div>
                    <span>Sandro Ribiro Dos Santos Junior</span>
                </div>
                <div class="worker">
                    <div class="avatar">
                        <span>SJ</span>
                    </div>
                    <span>Sandro Ribiro Dos Santos Junior</span>
                </div>
            </section>
            <div class="metrics info-workers">
                <p><span>Nome: </span>Sandro Ribeiro Dos Santos Junior</p>
                <p><span>Grupo: </span>IV</p>
                <p><span>Horário: </span>13:00h - 19:00h</p>
                <p><span>Constraint: </span>Não Escalar Aos Sábados</p>
                <h4>Pedidos: </h4>
                <p>Não escalar dia 27/04/2023</p>
            </div>
            <div class="metrics">
                
            </div>
            <div class="metrics">
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default App
