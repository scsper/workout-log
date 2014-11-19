var path = require('path'),
    db = require('./config.json')['db'];

var dir = path.resolve(__dirname, '..');

require('sql-migrations').run({
    basedir: dir,
    migrationsDir: path.resolve(dir, 'migrations'),
    user: db.user,
    host: db.host,
    db: db.name
});
