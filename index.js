'use strict'
const exec = require('child_process').exec
const linguist = require('js-linguist')
const escapeRegExp = require('escape-string-regexp')
const fs = require('graceful-fs')

function main (path, opts, cb) {
  // if (typeof str !== 'string') {
  //   throw new TypeError('Expected a string')
  // }

  opts = opts || {}

  linguist({}, (data) => {
    const check = {}

    return fs.readFile(path, 'utf8', (err, file) => {
      if (err) console.log(err)
      // Badges
      check.standardReadmeBadge = ('' + file).match(escapeRegExp('[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)'))

      console.log('check', check)
      return check
    })
  })
}

module.exports = main
