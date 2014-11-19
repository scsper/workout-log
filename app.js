var db = require('./db/index.js');

db.insert('run', function(err, result) {
    console.log('insert result', result);

    db.getAll(function(err, result) {
        console.log('getAll', result);
    });
});
