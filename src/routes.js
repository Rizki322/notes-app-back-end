const { addNoteHandler, getAllNotesHnaadler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler')

const routes = [{
  method: 'POST',
  path: '/notes',
  handler: addNoteHandler
},
{
  method: 'GET',
  path: '/notes',
  handler: getAllNotesHnaadler
}, {
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler
}, {
  method: 'PUT',
  path: '/notes/{id}',
  handler: editNoteByIdHandler
}, {
  method: 'Delete',
  path: '/notes/{id}',
  handler: deleteNoteByIdHandler
}]

module.exports = routes
