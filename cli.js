#!/usr/bin/env node
'use strict'

var meow = require('meow')
const addLanguageBadges = require('./')

var cli = meow([`
  Usage
    $ add-language-badges [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ add-language-badges
    unicorns & rainbows
    $ add-language-badges ponies
    ponies & rainbows
`], {
  alias: {}
})

addLanguageBadges(cli.input[0], {}, function (data) {
  console.log(data)
})
