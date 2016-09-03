var uniqueRandomArray = require('unique-random-array')
var norseNames = require('./norse-names.json')
var getRandomItem = uniqueRandomArray(norseNames)

module.exports = {
  all: norseNames,
  random: random
}

function random (num) {
  if (num === undefined) {
    return getRandomItem()
  } else {
    var randomItems = []
    for (var i = 0; i < num; i++) {
      randomItems.push(getRandomItem())
    }
    return randomItems
  }
}
