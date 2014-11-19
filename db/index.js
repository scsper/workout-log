var query = require('./query.js');

module.exports = {
    getAll: function(cb) {
        query('select * from "workouts"', null, function(err, result) {
            if (err) {
                return cb(err);
            }
            cb(null, result.rows);
        });
    },

    insert: function(type, cb) {
        query('insert into "workouts" (type) values ($1)', [type], function(err, result) {
            if (err) {
                return cb(err);
            }

            cb(null, result);
        });
    }
};
