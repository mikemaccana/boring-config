'use strict';

var CSON = require('CSON'),
  fs = require('fs'),
  process = require('process'),
  log = console.log.bind(console),
  DEFAULT_CONFIG_FILE = 'config.cson';

var dieIfError = function(err, reason){
  if (err) {
    log(reason);
    log(err)
    process.exit(1);
  }
}

// Load config, run cb once loaded
var loadConfig = function(configFileName, cb) {
  configFileName = configFileName || DEFAULT_CONFIG_FILE;
  log('Loading', configFileName)
  fs.readFile(configFileName, {'encoding':'utf-8'}, function (err, data) {
    dieIfError(err, 'Could not open config file');
    CSON.parse(data.toString(), function(err, config){
      dieIfError(err, 'Could not parse '+configFileName)
      var args = process.argv.splice(2);
      config.isProduction = ( process.env.NODE_ENV === 'production' );
      log('Running as :', config.isProduction ? 'production': 'development')
      cb(config);
    });
  })
}


module.exports = loadConfig;
