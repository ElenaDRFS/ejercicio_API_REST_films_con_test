const express = require('express');
const app = express();
const port  = 3000;

const filmsRoutes = require('./routes/films.routes')

app.use('/',filmsRoutes);


app.listen(port,()=> {
    console.log(`escuchando en el puerto: http://localhost:${port} `)
    
})