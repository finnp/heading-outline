#!/usr/bin/env node

var trumpet = require('trumpet')
var strip = require('strip-html')
var headings = require('./')


process.stdin
  .pipe(headings())
  .on('data', function (d) {
    console.log(Array(d.level+1).join('-') + d.text)
  })