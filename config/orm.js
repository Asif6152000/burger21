var connection = require ("./orm.js") 
function selectAll() {
    connection.query("SELECT * FROM burgers_DB" , function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)

      });
}
