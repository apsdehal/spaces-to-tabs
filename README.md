# spaces-to-tabs
[![NPM Version](https://img.shields.io/npm/v/spaces-to-tabs.svg?style=flat)](https://www.npmjs.com/package/spaces-to-tabs)
[![Build Status](https://travis-ci.org/apsdehal/spaces-to-tabs.svg?branch=master)](https://travis-ci.org/apsdehal/spaces-to-tabs)

Convert spaces to tabs

## Install

> npm install --global spaces-to-tabs

## Usage

```
  $ spaces-to-tabs -h

  Usage: spaces-to-tabs [options] <file ...>

  Space to tabs: Convert space in your files to tabs

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -s, --spaces <integer>  Number of spaces in a group to convert
    -w, --no-write          Don't write the file. Writes by default.

  Globbing is supported in files

  Examples:

    $ spaces-to-tabs jquery-mobile/tests/**/*.js -s 4

  By Amanpreet Singh <@apsdehal>
```

## API
> $ npm install --save spaces-to-tabs

```js
var stt = require('spaces-to-tabs');
var str = 'some Strings';
var spacesNo = 4;
str = stt(str, spacesNo);
```
## License

MIT © [Amanpreet Singh](https://apsdehal.in)
