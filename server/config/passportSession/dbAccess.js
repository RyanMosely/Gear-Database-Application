require('dotenv').config();
const sessionPool = require('pg').Pool

const sessionDBaccess = new sessionPool({
    adapter: 'connect-pg-simple',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

module.exports = sessionDBaccess;