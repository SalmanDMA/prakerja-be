import mysql from 'mysql2/promise';

const dbpool = mysql.createPool({
 host: 'localhost',
 user: 'root',
 password: '@Salmandma123',
 database: 'batch_11',
 port: 3307,
});

export default dbpool;
