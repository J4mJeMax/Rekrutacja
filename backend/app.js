const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require("http");
const bodyParser = require('body-parser');
const databaseConfig = {
  host: 'localhost',
  user: 'root',
  database: 'project',
  password: '',
  charset : 'utf8_general_ci',
}

const pool = mysql.createPool(databaseConfig);

app.use(bodyParser.json({limit: '50mb'}));

app.use(cors({
  credentials: true,
  origin: 'http://localhost:4200',
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  next();
});



app.get('/clients', (req, res) => {
  let query = `SELECT * FROM clients`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.post('/clients', (req, res) => {
  let query = `INSERT INTO clients (name) VALUES ('${req.body.name}')`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.delete('/clients/:id', (req, res) => {
  let query = `DELETE FROM clients WHERE client_id = ${req.params.id}`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.put('/clients/:id', (req, res) => {
  let query = `UPDATE clients SET name = '${req.body.name}' WHERE client_id = ${req.params.id}`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
})

app.get('/documents/:clientId', (req, res) => {
  console.log(req.params)
  let query = `SELECT * FROM documents WHERE client_id = ${req.params.clientId}`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.delete('/documents/:id', (req, res) => {
  let query = `DELETE FROM documents WHERE document_id = ${req.params.id}`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
})

app.post('/documents', (req, res) => {
  let query = `INSERT INTO documents (client_id, name, content, create_date) VALUES (${req.body.client_id}, '${req.body.name}', '${req.body.content}', NOW())`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.put('/documents/:id', (req, res) => {
 let query = `UPDATE documents SET name = '${req.body.name}', content = '${req.body.content}' WHERE document_id = ${req.params.id}`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.get('/document/:id', (req, res) => {
  let query = `SELECT * FROM documents WHERE document_id = ${req.params.id}`;
  pool.query(query, (err, rows) => {
  if(err) throw err;
  res.send(rows[0]);
  });
});

const server = http.createServer(app)
server.listen(3000, () => {
  console.log(`App running on: http://localhost:3000`)
});
