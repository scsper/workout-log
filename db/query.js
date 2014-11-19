var pg = require('pg'),
    db = require('./db/config.json')['db'];

/**
 * @param {String} query SQL query
 * @param {Array} values for database Query e.g. 'delete from my_table where id = $1', [123]
 * @param {Function} cb will take (err, results) args
 */
module.exports = function(query, values, cb) {
    var dbConnect = 'postgres://' + db.user + '@' + db.host + '/' + db.database;

    pg.connect(dbConnect, function(err, client, done) {
        if (err) {
            return cb(err);
        }

        client.query(query, values, function(err, results) {
            done();

            if (err) {
                return cb(err);
            }

            cb(null, results);
        });
    });
};
