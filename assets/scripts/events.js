'use strict'
const api = require('./api')
const ui = require('./ui')

// get books ajax request
const onGetBooks = function () {
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}

const addHandler = function () {
  $('#get-books').on('click', onGetBooks)
}

module.exports = {
  addHandler
}
