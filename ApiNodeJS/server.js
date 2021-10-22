const express = require('express');
const app = express();
const { sequelize } = require('./'); 

// Setting
const PORT = process.env.PORT || 5000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require('./src/routes'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    sequelize.authenticate().then(() => {
        console.log("Se ha establecido la conexión");
    })
});