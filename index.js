#!/usr/bin/env node

var trumpet = require('trumpet')
var strip = require('strip-html')
var PassThrough = require('stream').PassThrough
var concat = require('concat-stream')
var duplexify = require('duplexify')

module.exports = function () {
  var tr = trumpet()
  
  var out = new PassThrough({objectMode: true})

  ;[1, 2, 3, 4, 5].forEach(function (n) {
    tr.selectAll('h' + n, function (h1) {
      var heading = h1.createReadStream()
      heading
        .pipe(strip())
        .pipe(concat(function (result) {
          out.write({ level: n, text: result.toString()})
        }))
    })
  })
  
  return duplexify.obj(
    tr,
    out
  )
}




