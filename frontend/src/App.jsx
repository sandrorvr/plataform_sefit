import { useState, useEffect} from 'react'
import './App.css'

import WorkOfSchedule from './components/WorkOfSchedule';
import SelectWorkes from './components/SelectWorkers';

function App() {
  const [data, setData] = useState([]);
  const [servidores, setservidores] = useState([{}]);

  return (
    <div className="App">
      <section id="container">
        <div className="side-bar"></div>
        <div className="content">
            <header id="header-escale">
                <form action="">
                    <div id="config-scale" className="config-scale-items">
                        <div id="set-date-type">
                            <input type="date" name="date" id="date"></input>
                            <div className="row">
                            <select name="type-scale" id="type-scale">
                              <option value="fds">Final de Semana</option>
                              <option value="mensal">Mensal</option>
                              <option value="carnaval">Calanaval</option>
                              <option value="yemanja">Yemanja</option>
                            </select>
                            </div>
                        </div>
                        <div className="item-column">
                            <label htmlFor="defaut">Defaut</label>
                            <input id="defaut" type="radio" name="config" value="defaut"></input>
                        </div>
                        <div className="item-column">
                            <label htmlFor="lastScale">Last Scale</label>
                            <input id="lastScale" type="radio" name="config" value="lastScale"></input>
                        </div>
                        <div className="item-column">
                            <label htmlFor="empty">Empty</label>
                            <input id="empty" type="radio" name="config" value="empty"></input>
                        </div>
                    </div>
                </form>
                <form action="">
                    <div id="set-new-area" className="">
                        <div id="inputs-area">
                            <div className="row">
                                <select name="type-scale" id="type-scale">
                                    <option value="boos">Supervisor</option>
                                    <option value="cood">coordenador</option>
                                    <option value="area">Area</option>
                                    <option value="eqp">Equipamento</option>
                                </select>
                            </div>
                            <div className="row">
                                <input id="newArea" type="text" name="newArea" placeholder="id"></input>
                                <input id="value" type="text" name="value" placeholder="value"></input>
                            </div>
                            <div className="row">
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
            <div id='workers'>
                <SelectWorkes/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default App
