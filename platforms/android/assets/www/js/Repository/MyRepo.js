var MyRepo = function () {
    var db = null;

    this.initialize = function () {
        var successDb = this.initDatabaseSuccess;
        var errorDb = this.initDatabaseFail;
        db = window.sqlitePlugin.openDatabase({name: "my.db", createFromLocation: 1}, successDb, errorDb);
        db.executeSql('CREATE TABLE IF NOT EXISTS mytable (text1 TEXT, num1 INTEGER)');
        db.executeSql('INSERT INTO mytable (text1, num1) VALUES(\'my text\', 89)');
        db.executeSql('INSERT INTO mytable (text1, num1) VALUES(\'Ruud\', 89)');
    };

    this.initDatabaseSuccess = function (tx) {
        console.error('Initialized the database');
    };

    this.initDatabaseFail = function (err) {
        alert("Failed initialization: " + JSON.stringify(err));
    };

    this.findById = function (i, callback) {
        db.executeSql('SELECT * FROM mytable', [], function (res) {
            if (typeof(callback) == 'function')
                callback(res.rows);
        });

        db.executeSql('INSERT INTO mytable2 (text1, num1) VALUES(\'table2value\', 89)');

        db.executeSql('SELECT * FROM mytable2', [], function (res) {
            if (typeof(callback) == 'function')
                callback(res.rows);
        });
    }
};