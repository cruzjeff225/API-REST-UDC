import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import TaskList from './Components/TaskList';
import Form from './Components/Form';

function App() {
  // Estado para manejar la información del formulario
  const [formTask, setFormTask] = useState({
    title: '', 
    priority: '',  
    description: '',
    time: '',  
    status: ''
  });

  //Estado para manejar la lista de tareas
  const [taskList, setTaskList] = useState([]);

  //obtener las tareas desde el servidor
  useEffect(() => {
    const getTasks = () => {
      fetch("http://localhost:3000/all-task")
      // Convertimos la respuesta a JSON
        .then(res => res.json())
        .then(data => {
          //Vrificar los datos recibidos
          console.log("Datos recibidos:", data);
          //Actualizamos la lista
          setTaskList(data);
        })
         // Manejo de errores en la conexión
        .catch(err => console.error("Error de conexión", err));
    };
    getTasks();
  }, []);

  //eliminación de una tarea
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/all-task/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {

        setTaskList((prevTasks) => prevTasks.filter(task => task.id !== id));
        console.log("Tarea eliminada con éxito"); 
      })
      .catch(err => console.error("Error al eliminar la tarea:", err));
  };

  return (
    <Fragment>
      {/* Navbar con el nombre de la aplicación */}
      <Navbar brand='Task Manager App'/>
      <div className='container'>
        <div className="row">
          <div className='col-7'>
            {/* Título y componente para listar las tareas */}
            <h2 style={{ textAlign: 'center' }}>Tu Lista de Tareas</h2>
            <TaskList taskList={taskList} onDelete={handleDelete} />
          </div>
          <div className='col-5'>
            {/* Título y componente para agregar/editar) */}
            <h2 style={{ textAlign: 'center' }}>Gestiona Acá</h2>
            <Form tasks={formTask} setTasks={setFormTask} setTaskList={setTaskList} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
