var expect = require('chai').expect
var norseNames = require('./index')

describe('norse-names', function () {
  describe('all', function () {
    it('should be an array of strings', function (done) {
      expect(norseNames.all).to.satisfy(isArrayOfStrings)
      done()

      function isArrayOfStrings (arr) {
        return arr.every(function (item) {
          return typeof item === 'string'
        })
      }
    })

    it('should contain `Thor`', function (done) {
      expect(norseNames.all).to.include('Thor')
      done()
    })
  })

  describe('random', function () {
    it('should return a random item from the norseNames.all', function (done) {
      var randomItem = norseNames.random()
      expect(norseNames.all).to.include(randomItem)
      done()
    })

    it('should return a list of items if passed a number', function (done) {
      var randomItems = norseNames.random(3);
      expect(randomItems).to.have.length(3)
      randomItems.forEach(function (item) {
        expect(norseNames.all).to.include(item)
      })
      done()
    })
  })
})
