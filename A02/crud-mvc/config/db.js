const mysql = require('mysql2'); 
const connection = mysql.createConnection({ 
  host: 'localhost', 
  user: 'root', 
  password: 'gatito', // coloca tu contraseña si tienes una 
  database: 'crud_node' 
}); 
 
connection.connect(err => { 
  if (err) throw err; 
  console.log('Conectado a la base de datos MySQL.'); 
}); 
 
module.exports = connection;