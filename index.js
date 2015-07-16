var Comb = require("csscomb")
module.exports = function () {
  this.filter("csscomb", (source, options) => {
    var comb = new Comb(options)
    try {
      return comb.processPath(source)
     } catch (e) { throw e }
  })
}
