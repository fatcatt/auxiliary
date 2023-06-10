var mysql = require('mysql');
const config = {
    host: 'localhost',
    port: 3306, //端口号
    database: 'users',
    user: 'root',
    password: '12345678'
};

var pool = mysql.createPool(config);
// console.log(pool);
// pool.getConnection(function (err, connection) {
//     if (err) {
//         console.log(err);
//     } else {
//         connection.query('select * from registered', (err, users) => {
//             if (err) {
//                 // res.send(err);
//             } else {
//                 // 将 MySQL 查询结果作为路由返回值
//                 console.log(users);
//             }
//         });
//     }
// });

module.exports = pool;
