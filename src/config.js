//importing module
const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');
//
const connect = mongoose.connect("mongodb://127.0.0.1:27017/DETAILS_DATA");
//checking for database connection
connect.then(() => {
    console.log("DATABASE IS CONNECTED");
})
connect.catch(() => {
    console.log("DATABASE IS NOT CONNECTED");
})

//creating a schema
const Loginschema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});
// const regschema = new mongoose.Schema({
//     Name: {
//         type: String,
//         required: true
//     },
//     Age: {
//         type: Integer,
//         required: true
//     },
//     Class: {

//     },
//     Major: {
//         type: String,
//         required: true
//     }
// })

const collection = new mongoose.model("user", Loginschema);
//const details = newmongoose.model("user", regschema);

module.exports = collection
//module.exports = details