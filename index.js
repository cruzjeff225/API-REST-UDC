const express = require('express');
const app = express();

app.use(express.json());

//Adicionando un endpoint
app.get("/", (req, res) => {
    res.send("Bienvenido a la API - Gestión de Tareas Simple")
});

app.listen(3000, () => {
    console.log('Servidor escuchando desde el puerto 3000');
})