const { createTodo }= require("../utils/types");
const Todo = require("../models/todos")

exports.createTodo = async(req,res)=>{

    try {

        const createPayload = req.body;
        const parsePayload = createTodo.safeParse(createPayload)

        if(!parsePayload.success){
          res.status(401).json({
            success:false,
            message:"Wrong input",
          })
          return
        }

    
       await Todo.create({
            title:createPayload.title,
            desc:createPayload.desc,
          
        })

        res.json({
            message:"Todo create"
        })
        

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
            message:"post todo wrong response"
        })
    }
    
}

//update todo
exports.updateTodo = async(req,res)=>{

    try {

        const createPayload = req.body;
        const parsePayload = createTodo.safeParse(createPayload)

        if(!parsePayload.success){
          res.status(401).json({
            success:false,
            message:"Wrong input",
          })
          return
        }

        const ans = await Todo.findById({
            _id : req.body.id,

        },{
            completed:true
        })

        res.send({
            message:"Successfully update ",
            data:ans,
            success:true,

        })

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
            message:"put todo wrong response"
        })
    }
    
}

exports.getAlltodos = async(req,res)=>{
    try {
        
        const tosos =await Todo.find({});

        res.status(200).json({
            tosos
        })

    } catch (error) {
        console.log(error);
        console.log("Error whilie aal data find");
    }
}