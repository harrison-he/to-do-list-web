const mongoose = require('mongoose')
const { Schema } = mongoose

const ToDoItemSchema = new Schema({
    value: String
})

module.exports = ToDoItem = mongoose.model("toDoItem",ToDoItemSchema)