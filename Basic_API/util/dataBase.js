const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: 'root',
    database: 'nodeDB',
    password: '123456789',
    port: 3307
});

module.exports = pool.promise();