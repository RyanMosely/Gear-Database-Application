const sessionDBaccess = require('./dbAccess');
const secretConfig = require('./secretConfig');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session)

const sessionConfig = {
    store: new pgSession({
        pool: sessionDBaccess,
        tableName: 'session'
    }),
    name: 'SID',
    secretConfig,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        aameSite: true,
        secure: false // ENABLE ONLY ON HTTPS
    }
};

module.exports = sessionConfig;