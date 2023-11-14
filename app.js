const express = require('express');
const app = express();
const port  = 3000;

const filmsRoutes = require('./routes/films')

app.use('/api/film', filmsRoutes);


app.listen(port,()=> {
    console.log(`escuchando en el puerto: http://localhost:${port} `)
    
})