var express = require('express');
// var mysql = require('mysql2');
// require('dotenv').config()

const userRoute = require('./routes/user');
const employeeRouter = require("./routes/employee");

var app = express();

// var connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     connectionLimit: 10
// });
//
// connection.connect((error) => {
//     if (error) {
//         console.error('Error connecting to MySQL database:', error);
//     } else {
//         console.log('Connected to MySQL database!');
//     }
// });

app.use("/employees", employeeRouter);

app.use('/users',userRoute);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
