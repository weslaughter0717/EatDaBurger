// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host:	'ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: "jze0t4d3p4qsatx4",
  password: "fueq3vg5f3kszkr2",
  database: "i9vv64i37w3cosgu"	
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
