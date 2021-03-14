require('dotenv').config();

const sessionDBaccess = new sessionPool({
    user: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME})

module.exports = sessionDBaccess;