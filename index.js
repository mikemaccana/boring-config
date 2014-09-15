'use strict';

var CSON = require('cson'),
  log = console.log.bind(console),
  DEFAULT_CONFIG_FILE = 'config.cson';

var loadConfig = function(configFileName) {
  configFileName = configFileName || DEFAULT_CONFIG_FILE;
  log('Loading', configFileName)
  var config = CSON.parseFileSync(configFileName)
  var args = process.argv.splice(2);
  config.isProduction = ( process.env.NODE_ENV === 'production' );
  log('Running as :', config.isProduction ? 'production': 'development')
  return config;
}

module.exports = loadConfig;
