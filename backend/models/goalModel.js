const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //name of the model object is refering to 
    },
    text:{
        type:String,
        required: [true, 'Please add a text value']
    }
},
    {
        timestamps:true,
    }
)

module.exports = mongoose.model('Goal', goalSchema)