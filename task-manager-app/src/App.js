import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import TaskList from './Components/TaskList'

function App() {

  const [task, setTask] = useState([])
  useEffect(() => {
    const getTasks = () => {
      fetch("http://localhost:3000/all-task")
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos:", data)
        setTask(data); // Actualiza el estado con las tareas recibidas
      })
      .catch(err => console.error("Error fetching tasks:", err));
  };
  getTasks();
}, []);

  return (
    <Fragment>
      <Navbar brand='Task Manager App'/>
      <div className='container'>
        <div className = "row">
          <div className='col-7'>
            <h2 style={{textAlign:'center'}}>Tu Lista de Tareas</h2>
            <TaskList task = {task}/>{/* Pasar las tareas como props a TaskList */}
          </div>
          <div className='col-5'>
          <h2 style={{textAlign:'center'}}>Gestiona Acá</h2>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
