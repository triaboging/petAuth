const {Schema, model, Types} = require('mongoose')
const schema = new Schema({
    email: {type: String,
    required: true, unique: true
    },
    password: {type: String, required: true},
    links: [{type: Types.ObjectId, ref: 'Link'}],
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String}
})
module.exports = model('User', schema)