const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,   
},{
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,   
},{
    age: {
        type: Integer,
        required: true,
        // unique: false,
        trim: true,
        minlength: 2
    },
}, {
    timestamps: true,   
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;