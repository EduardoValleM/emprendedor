// Instala el servidor express
const express = require ('express');
const app = express ();

// Solo sirven los archivos estáticos del directorio dist
app.use (express.static (__ dirname + '/ dist'));

// Inicie la aplicación escuchando en el puerto Heroku predeterminado
app.listen (process.env.PORT || 8080);
