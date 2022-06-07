const router = require('express').Router();

const {
  list
} = require('../../db/db');

const {
  createNote,
  deleteNote
} = require('../../lib/functions');

router.get('/notes', (req, res) => {
  let created = list;
  res.json(created);
});

router.post('/notes', (req, res) => {
  req.body.id = list.length.toString();
  let note = createNote(req.body, list);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  deleteNote(list, req.params.id);
  res.json(list);
});

module.exports = router;