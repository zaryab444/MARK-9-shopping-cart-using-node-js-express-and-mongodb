module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/categories', notes.create);

    // Retrieve all Notes
    app.get('/categories', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/categories/:categoriesId', notes.findOne);

    // Update a Note with noteId
    app.put('/categories/:categoriesId', notes.update);

    // Delete a Note with noteId
    app.delete('/categories/:categoriesId', notes.delete);
}