const express = require("express");
const fs = require("fs")
const app = express();
const PORT = 3000;


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let notes = []

app.get('/api/notes',function(req,res){
    console.log('appGet works')
    res.send(notes)
});


app.post( "/api/notes", function( req, res ){
    const newNotes=req.body;
    newNotes.id = Date.now()
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.send(notes)
})


app.delete("/api/notes/:id", function( req, res ){
    const noteID = req.params.id
    notes = notes.filter( note => note.id != noteID )
    fs.writeFileSync( './db/db.json', JSON.stringify(notes) )
    res.send( notes );
    console.log('delete works')
    
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  