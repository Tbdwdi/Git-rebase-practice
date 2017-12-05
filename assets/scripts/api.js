'use strict'
const config = require('./config')

// get all books ajax request
const getBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET'
  })
}

module.exports = {
  getBooks
}
