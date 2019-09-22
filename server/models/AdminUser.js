const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        select: false,
        set: val => require('bcrypt').hashSync(val, 10)
    }
})
module.exports = mongoose.model('AdminUser', Schema)