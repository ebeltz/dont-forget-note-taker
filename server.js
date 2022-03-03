// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});