const express = require('express');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
 name : {
    type: String,
    required: true
  }, 
  description: {
      type: String,
      required: true
    },
    duedate: {
        type: Date,
        required:true
      },
      dateset: {
          type: Date,
          default: Date.now
        },
        completed: {
            type: Boolean,
            default:false,
            required: true
          },
});

module.exports = Todo = mongoose.model("todo", TodoSchema);