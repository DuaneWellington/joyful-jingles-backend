// PATH: 'JOYFUL-JINGLES/express-react/backend/server.js'

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config();
const express = require("express");
const session = require("express-session");
const {auth, requiresAuth } = require("express-openid-connect");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const usersRouter = require('./routes/users.jsx');

require('./config/db.connection.js')


///////////////////////////////
// MIDDLEWARE
////////////////////////////////

const app = express();


app.use(session({
    secret: process.env.EXPRESS_OPENID_SECRET,
    resave: true,
    saveUninitialized: false,
}));

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL || "http://localhost:5174",
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: "https://accounts.google.com",
    secret: process.env.CLIENT_SECRET,
};

app.use(auth(config));

app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

app.use(cors()); // to minimize cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

// all requests for endpoints that begin with '/users'
app.use('/users', usersRouter)

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    // res.send("We outcheyah...")
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/special", requiresAuth(), (req, res) => {
    res.send("Special route for authenticated users");
});

///////////////////////////////
// LISTENER
////////////////////////////////
const PORT = process.env.PORT || 5174;

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});