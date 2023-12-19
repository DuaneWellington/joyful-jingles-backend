// PATH: 'JOYFUL-JINGLES/express-react/backend/routes/users.jsx'


///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users.jsx')
const { auth } = require('express-openid-connect');


///////////////////////////////
// ROUTES
////////////////////////////////

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL || "http://localhost:5174",
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: "https://accounts.google.com",
    secret: process.env.CLIENT_SECRET,
};

  // auth router attaches /login, /logout, and /callback routes to the baseURL
// router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
	res.send("We routing...")
	// res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

  router.get("/special", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Special route for authenticated users' : 'Unauthorized');
});

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