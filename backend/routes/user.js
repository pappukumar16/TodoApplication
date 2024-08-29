const express = require("express")
const app = express.Router()

const {createTodo,updateTodo,getAlltodos} = require("../controllers/User")

app.post("/todo",createTodo);
app.put("/completed",updateTodo);
app.get("/todos",getAlltodos)

module.exports = app;