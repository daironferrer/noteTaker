const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// Renders Notes
router.get('/notes', function (req, res) {
    const data = fs.readFileSync('./db/db.json', 'utf-8');
    console.log(data);
    res.json(JSON.parse(data));
});

// Creates a new note
router.post('/notes', function(req, res) {
    const title = req.body.title;
    const text = req.body.text;
    const newNote = {title, text};
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

    // Pushes note
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(newNote);
});

// Deletes a note
router.delete('notes/:id', function(req, res) {
    const data = JSON.parse(fs.readFileSync('./db/.db.json', 'utf-8'));
    const updateNotes = data.filter((note) => note.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(updateNotes));
    res.json({ ok:true });
});

// Exports
module.exports = router;