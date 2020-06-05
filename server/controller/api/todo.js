
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo=require("../../model/Todo");
const validateTodoInput=require("../../validation/TodoValidator");
/*
    @route  api/todo/addTodo
    @desc  ADD A TODO
    @access public
*/
router.post("/create", (req, res) => {
const{errors,isValid}= validateTodoInput(req.body)
if (!isValid){
 // if condition is TRUE do something
 res.status(400).json(errors);
}  
else{
Todo .findOne({name:req.body.name })
      .then(todo => {
        if (todo) {
            return res.status(400).json("The Todo name already exists");
        }
        else{
            const newTodo = new Todo({
                name : req.body.name,
                description:req.body.description,
                duedate:req.body.duedate
               });
               
               newTodo.save().then(todo => {
                 res.json(todo);
               });
        }
      })
};
});
/*
    @route  api/todo/read/id
    @desc  GET SPECIFIC DATA ABOUT A TASK
    @access public
*/
router.get('/read/:id', (req, res) => {
Todo  .findOne({_id:req.params.id })
      .then(todo => {
        if (todo){
         // if condition is TRUE do something
         res.json(todo);
        } else {
         // do something else
         res.json({message:"No user FOund"});
        };
      })
});
/*
    @route  api/todo/all
    @desc GET ALL TASKS NOT COMPLETED
    @access public
*/
router.get('/all', (req, res) => {
Todo.find({completed:"false"})
    .then(todo => res.json(todo));
});
/*
    @route  api/todo/update/:id
    @desc UPDATE SEPCIFIC TASKS AND DUE DATE
    @access public
*/
router.put('/update/:id', (req, res) => {
    const{errors,isValid}= validateTodoInput(req.body)
if (!isValid){
 // if condition is TRUE do something
 res.status(400).json(errors);
}  
Todo  .findOne({_id:req.params.id })
      .then( todo=> {
        if (todo) {
            todo.name=req.body.name;
            todo.description=req.body.description;
            todo.duedate=req.body.duedate;
            todo.save().then(todo => {
                res.json(todo);
              });
        } else {
            res.json("Error")
        }
      })
});
/*
    @route  api/todo/delete/:id
    @desc  DELETE SPECIFIC USER BY ID
    @access public
*/
router.delete('/delete/:id', (req, res) => {
Todo.findOne({_id:req.params.id})
    .then( todo=> todo.remove().then(() => res.json({ success: true })))
    .catch(err => {
      res.status(400).json({ success: false });
    });
});
 module.exports = router