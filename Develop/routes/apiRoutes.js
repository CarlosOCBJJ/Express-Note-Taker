const dbJson = require("../db/db.json");
const router = require("express").Router();


    // fs.readFile("./db/db.json", "utf8", function (err, data) {
    //     if (err) throw err;
    //     noteData = JSON.parse(data);
    //     console.log(data)
    // })

    router.get("/api/notes", function (req, res) {
        console.log(noteData);
        res.json(noteData);
    });

    router.post("/api/notes", function (req, res) {
        console.log("test");
        var newNote = req.body;
        noteData.push(newNote);
        let parsedata = JSON.stringify(noteData)
        fs.writeFile(path.join('./db/db.json'), parsedata, (err) => {
            if (err) throw err;
        })
        // console.log(noteData);
        res.json(noteData);
    });

    router.delete("/api/notes/:id", function (req, res) {
        console.log("erase");
        var deleteData = req.params.id;
        // console.log(deleteData) DOESNT KNOW WHAT IS deleteData
        console.log(deleteData)
        for (i=0; i<noteData.length; i++) {
            // console.log(noteData[i])
            if (deleteData === noteData[i].title) {
                noteData.splice(i, 1)
            };
        };
        let parsedata = JSON.stringify(noteData)
        // deleted __dirname from path.join
        fs.writeFile(path.join('db.json'), parsedata, (err) => {
           if (err) throw err;
       })
        console.log(noteData)
        res.json(noteData)
    })

    module.exports = router;
