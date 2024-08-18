import React from 'react';

const TaskList = ({ taskList, onDelete }) => {
  return (
    <table className='table table-striped'>
      <thead className='thead-dark'>
        <tr>
          <th>N° de Tarea</th>
          <th>Tarea</th>
          <th>Prioridad</th>
          <th>Descripción</th>
          <th>Hora</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.task}</td>
              <td>{task.priority}</td>
              <td>{task.description}</td>
              <td>{task.time}</td>
              <td>{task.status}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
                <i className="fa-solid fa-trash">Eliminar</i>
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">No hay tareas disponibles.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TaskList;

