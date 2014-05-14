# Boring Config

[CSON](https://github.com/bevry/cson) is great for config files, with less unnecessary tokens than JSON and more consistency than YAML.

 - Load a CSON config file
 - If it fails, bail.
 - If it loads, run a callback with it.

## Example

	var boringConfig = require('bording-config');

	boringConfig.loadConfig('config.cson', function(config){
		console.log('Config is', config)
	}



Simple.