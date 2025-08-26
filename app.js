const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(express.json()); // Para parsear JSON en las solicitudes

// Conexión a MongoDB
mongoose.connect('mongodb://mongo:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch((err) => console.log('Error al conectar con MongoDB: ', err));

// Usamos las rutas CRUD
app.use('/api/items', itemRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
