const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

//Ruta absoluta para db.json
const tareasPath = path.join(__dirname, 'db.json');

//Adicionando un endpoint (raíz)
app.get("/", (req, res) => {
    res.send("Bienvenido a la API - Gestión de Tareas Simple")
});

//Lectura de DB simulada en JSON
const readData = () => {
    const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
};

//Escritura a DB simulada en JSON
const writeData = (data) => {
    fs.writeFileSync("./db.json", JSON.striginfy(data));
    return JSON.parse(data);
}


app.listen(3000, () => {
    console.log('Servidor escuchando desde el puerto 3000');
})