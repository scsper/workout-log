var query = require('./query.js');

module.exports = {
    getAll: function(cb) {
        query('select * from "workouts"', function(err, result) {
            if (err) {
                return cb(err);
            }
            cb(null, result.rows);
        });
    }
};
