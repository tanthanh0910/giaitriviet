// // const db = require('../models');
// // const User = db.user;
// const {User, Employee} = require('../models/user');
// // const create = async (req, res) => {
// // // Validating the request
// //     if (!req.body.first_name) {
// //         res.status(400).send({
// //             message: 'Content can be placed here!'
// //         });
// //         return;
// //     }
// //
// // // Creating a Tutorial
// //     const User = {
// //         first_name: req.body.first_name,
// //         last_name: req.body.last_name,
// //         email: req.body.email
// //     };
// //
// // // Saving the Tutorial in the database
// //     User.create(user).then(data => {
// //         res.send(data);
// //     }).catch(err => {
// //         res.status(500).send({
// //             Message:
// //                 err.message || 'Some errors will occur when creating a tutorial'
// //         });
// //     });
// // };
// //
// // const findOne =  async (req, res) => {
// //     const id = req.params.id;
// //
// //     User.findByPk(id).then(data => {
// //         res.send(data);
// //     }).catch(err => {
// //         res.status(500).send({
// //             message: `Error while retrieving tutorial with id=` + id
// //         });
// //     });
// // }
//
// // const getAll = async (req, res) => {
// //     const userList = await User.findAll();
// //     res.statusCode = 200;
// //     res.join(userList);
// // }
// const getAll = async (req,res) => {
//     const employeeList = await Employee.findAll();
//     res.statusCode = 200;
//     res.json(employeeList);
// }
//
// module.exports = {
//     // create,
//     // findOne,
//     getAll
// }
const {User} = require('../models');

const getAll = async (req,res) => {
    const employeeList = await User.findAll();
    res.statusCode = 200;
    res.json(employeeList);
}

module.exports = {getAll}