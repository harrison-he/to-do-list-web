const express = require('express')
const router = express.Router()
const ToDoItem = require('../../models/ToDoItem')

router.get("/", async (req, res) => {
    const toDoItems = await ToDoItem.find()
    res.json(toDoItems)
})

router.post("/", async (req, res) => {
    const toDoItem = new ToDoItem({
        value: req.body.toDoItem
    })
    const postedToDoItem = await toDoItem.save() 
    res.json(postedToDoItem)
})

router.delete("/:id", async (req, res) => {
    const deletedToDoItem = await ToDoItem.findByIdAndDelete(req.params.id)
    res.json(deletedToDoItem)
})

module.exports = router