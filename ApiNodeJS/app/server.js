const express = require('express');
const app = express();
var cors = require('cors')
const { sequelize } = require('./models/index'); 

// Setting
const PORT = process.env.PORT || 5000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
// Rutas
app.use(require('./routes'));


// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    sequelize.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});