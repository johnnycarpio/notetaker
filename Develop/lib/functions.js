const fs   = require('fs');
const path = require('path');

const createNote = (body, noteArr) => {
  const note  = body
  noteArr.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
      list: noteArr
    }, null, 2)
  );
}

const deleteNote = (noteArr, id) => {
  let delId = parseInt(id);
  noteArr.splice(delId, 1);

  for(let x = delId; x < noteArr.length; x++) {
    noteArr[x].id = x.toString();
  }

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
      list: noteArr
    }, null, 2)
  );
}


module.exports = {
  createNote,
  deleteNote
}

