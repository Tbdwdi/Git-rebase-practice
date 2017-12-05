

// Get request for onGetBooks (consider handlebars addition)
const onGetBooksSuccess = function (data) {
  console.log(data)
  console.log('Success')
}

// Failure response for Get request onGetBooks
const onGetBooksFailure = function (data) {
  console.log(data)
  console.log('Failure')
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
