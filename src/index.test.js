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
  })
})
