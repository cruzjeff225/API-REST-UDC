import React, { useState, useEffect } from "react";

const Form = ({ tasks, setTasks, setTaskList }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    description: "",
    time: "",
    status: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (tasks) {
      setFormData(tasks);
    }
  }, [tasks]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const method = tasks.id ? "PUT" : "POST";
    const url = tasks.id ? `http://localhost:3000/all-task/${tasks.id}` : "http://localhost:3000/all-task";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newTask) => {
        if (method === "POST") {
          setTaskList((prevTasks) => [...prevTasks, newTask]);
        } else {
          setTaskList((prevTasks) =>
            prevTasks.map((t) => (t.id === newTask.id ? newTask : t))
          );
        }
        setSuccessMessage("¡Tarea guardada con éxito!");

        setFormData({
          title: "",
          priority: "",
          description: "",
          time: "",
          status: "",
        });
      })
      .catch((err) => {
        console.error("Error al guardar la tarea:", err);
        setSuccessMessage("Error al guardar la tarea.");
      });
  };

  return (
    <div>
      {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Tarea</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            id="task"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priority" className="form-label">Prioridad</label>
          <input
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            type="text"
            id="priority"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            type="text"
            id="description"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Hora</label>
          <input
            name="time"
            value={formData.time}
            onChange={handleChange}
            type="text"
            id="time"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Estado</label>
          <input
            name="status"
            value={formData.status}
            onChange={handleChange}
            type="text"
            id="status"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Form;
