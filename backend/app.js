const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require("http");
const databaseConfig = {
  host: 'localhost',
  user: 'root',
  database: 'rekrutacja',
  password: '',
  charset : 'utf8_general_ci',
}

const pool = mysql.createPool(databaseConfig);

app.use(cors({
  credentials: true,
  origin: 'http://localhost:4200',
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  next();
});



app.get('/users', (req, res) => {
  let query = `SELECT * FROM users`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.post('/users', (req, res) => {
  let query = `INSERT INTO users (name) VALUES ('${req.body.name}')`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.delete('/users/:id', (req, res) => {
  let query = `DELETE FROM users WHERE client_id = ${req.params.id}`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.put('/users/:id', (req, res) => {
  let query = `UPDATE users SET name = '${req.body.name}' WHERE client_id = ${req.params.id}`;
  pool.query(query, (err, rows) => {
    if(err) throw err;
    res.send(rows);
  });
})

app.get('/documents', (req, res) => {
  let query = `SELECT * FROM documents WHERE client_id = ${req.query.client_id}`;
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

const server = http.createServer(app)
server.listen(3000, () => {
  console.log(`App running on: http://localhost:3000`)
});
