const sessionDBaccess = require('./dbAccess');
const secretConfig = require('./secretConfig');

const sessionConfig = {
    store: new pgSession({
        pool: sessionDBaccess,
        tableName: 'session'
    }),
    name: 'SID',
    secret: secretConfig,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        aameSite: true,
        secure: false // ENABLE ONLY ON HTTPS
    }};

module.exports = sessionConfig;