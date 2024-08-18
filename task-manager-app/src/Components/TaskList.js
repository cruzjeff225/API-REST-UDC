import React from 'react';

const TaskList = ({task}) => {
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
            </tr>
        </thead>
        <tbody>
                {task.length > 0 ? (
                    task.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.priority}</td>
                            <td>{task.description}</td>
                            <td>{task.time}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" style={{ textAlign: 'center' }}>
                            No hay tareas disponibles
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TaskList;