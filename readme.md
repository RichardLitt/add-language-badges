# add-language-badges

[![Build Status](https://travis-ci.org/RichardLitt/add-language-badges.svg?branch=master)](https://travis-ci.org/RichardLitt/add-language-badges)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Add language badges to a repo

## Install

```
$ npm install --save add-language-badges
```

## Usage

```js
const addLanguageBadges = require('add-language-badges');

addLanguageBadges('unicorns');
//=> 'unicorns & rainbows'
```

## API

### addLanguageBadges(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global add-language-badges
```

```
$ add-language-badges --help

  Usage
    add-language-badges [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ add-language-badges
    unicorns & rainbows
    $ add-language-badges ponies
    ponies & rainbows
```

## Contribute

PRs accepted. Check out the [issues](https://github.com/RichardLitt/add-language-badges/issues)!

## License

MIT © [Richard Littauer](http://burntfen.com)
