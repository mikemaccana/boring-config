'use strict';

var CSON = require('cson'),
  log = console.log.bind(console),
  DEFAULT_CONFIG_FILE = 'config.cson';

var loadConfig = function(configFileName) {
  configFileName = configFileName || DEFAULT_CONFIG_FILE;
  var config = CSON.parseFileSync(configFileName)
  if ( Object.prototype.toString.call(config) === '[object Error]' ) {
    log('Error loading config file', configFileName, ':', config)
    process.exit(1)
  }
  config.isProduction = ( process.env.NODE_ENV === 'production' );
  return config;
}

module.exports = loadConfig;
