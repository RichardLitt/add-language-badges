'use strict'
const exec = require('child_process').exec;

module.exports = function (opts, cb) {
  // if (typeof str !== 'string') {
  //   throw new TypeError('Expected a string')
  // }

  opts = opts || {}

  exec('linguist', function(err, stdout, stderr) {
    // if (err) {
    //   throw new Error('Unable to read repo')
    // }

  console.log(stdout)

    if (stdout) {
      return cb(stdout)
    }
  })


  // return str + ' & ' + (opts.postfix || 'rainbows')
}
