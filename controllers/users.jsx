// /controllers/users.jsx

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {users} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller


///////////////////////////////
// CONTROLLERS
////////////////////////////////

// USERS INDEX ACTION
async function index(req,res,next) {
	try {
    // get all users
    res.json(await users.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// USERS CREATE ACTION
async function create(req,res,next) {
  try {
    // create new user
    res.json(await users.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// USERS SHOW ACTION
async function show(req,res,next) {
    try {
        // send one user
        res.json(await users.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

// ... the remaining users controller actions will go below 

// USERS DESTROY ACTION 
async function destroy(req,res,next) {
  try {
    // delete users by ID
    res.json(await users.findByIdAndDelete(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// USERS UPDATE ACTION
async function update(req,res,next) {
  try {
    // update users by ID, provide the form data, and return the updated document.
    res.json(
      await users.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// EXPORT Controller Action
module.exports = {
	index,
	create,
	show,
  delete: destroy,
  update
}