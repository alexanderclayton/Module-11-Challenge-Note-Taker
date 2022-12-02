const fs = require('fs');
const uuid = require('../helpers/uuid')

module.exports = app => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);

        app.get('/api/notes', (req, res) => {
            res.json(notes)
        });

        app.post('/api/notes', (req, res) => {
            let newNote = {
                ...req.body,
                id: uuid(),
            }
            notes.push(newNote);
            writeNotes();
        });

        app.delete('/api/notes/:id', (req, res) => {
            notes.splice(req.params.id, 1);
            writeNotes();
        });

        function writeNotes() {
            fs.writeFile('./db/db.json', JSON.stringify(notes), 'utf8', err => {
                if (err) throw err;
                return true;
            });
        }
    });
};