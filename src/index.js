var uniqueRandomArray = require('unique-random-array')
var norseNames = require('./norse-names.json')

module.exports = {
  all: norseNames,
  random: uniqueRandomArray(norseNames)
}
