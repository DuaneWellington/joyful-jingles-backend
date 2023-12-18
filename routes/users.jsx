// ./routes/users.jsx

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users.jsx')

///////////////////////////////
// ROUTES
////////////////////////////////

// USERS INDEX ROUTE
router.get("/", usersCtrl.index);

// USERS CREATE ROUTE
router.post("/", usersCtrl.create);

// USERS SHOW ROUTE
router.get("/:id", usersCtrl.show);

// USERS DELETE ROUTE
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "users delete route: " + req.params.id })
});

// USERS UPDATE ROUTE
router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "users update route: " + req.params.id })
});

module.exports = router