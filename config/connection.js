
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Asif',
  password : 'funfunfun',
  database : 'burger_DB'
}); 

connection.connect( function(err) {
 
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);


  } ) ;

  module.exports=connection 


