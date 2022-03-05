// Dependencies
const fs = require("fs");
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/notes', function(req, res) {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        res.status(200).send(JSON.parse(data))
    })
});

router.post('/notes', (req, res) => {
    // console.log("post api notes")
    console.log(req.body)
    // set id based on what the next index of the array will be
    // req.body.id = notes.length.toString();
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        let db = JSON.parse(data)
        console.log(db)
        req.body.id = uuidv4();
        db.push(req.body);
        console.log(db)
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(db), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync(path.join(__dirname, '../db/db.json'), "utf8"));
            res.json(db)
        }
        });

        
    })






    // if (!validateAnimal(req.body)) {
    //    res.status(400).send('The animal is not properly formatted.');
    // } else {
    //    const note = createNewNote (req.body, notes);
    //    res.json(note);
    // }
});


 module.exports = router; 
