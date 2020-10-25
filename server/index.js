var cors = require('cors');
const express = require('express');
const app = express();
const { mongoose } = require('./database');
const routes = require('./routes/employees.routes');
const port = process.argv[2] || 3000;

// Middlewares
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());
app.use('/api/employees', routes);
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(port);
console.log(`Liste on port ${port}!`);