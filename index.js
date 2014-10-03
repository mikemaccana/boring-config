'use strict';

var CSON = require('cson'),
  log = console.log.bind(console),
  DEFAULT_CONFIG_FILE = 'config.cson';

var loadConfig = function(configFileName) {
  configFileName = configFileName || DEFAULT_CONFIG_FILE;
  var config = CSON.parseFileSync(configFileName)
  config.isProduction = ( process.env.NODE_ENV === 'production' );
  return config;
}

module.exports = loadConfig;
