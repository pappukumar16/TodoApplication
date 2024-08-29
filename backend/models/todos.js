const mongoose = require("mongoose")




const todoSchema = new mongoose.Schema({

    title:{
        type:String,
    },

    desc:{
        type:String,
    },
    completed:{
        type:Boolean
    }
})

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo