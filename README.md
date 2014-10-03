# Boring Config

[CSON](https://github.com/bevry/cson) is great for config files, with less unnecessary tokens than JSON and more consistency than YAML.

**Boring config loads a config file**. It's deliberately sync - there's no point loading your app until its config file has been parsed.

## Example

First you'll need a config file. `config.cson` is a good name for a config file:

	{
		# CSON has comments. Which is neat
		isProduction: null
		someApi:
			authKey: 'someApiKeyGoesHere' # TODO: pretty sure this isn't a real key
			userAgent: 'Mozilla/2.02Gold (Win95; I)'
		someOtherSetting: 'someValue'
	}

Then require and use it like this:

	var boringConfig = require('boring-config');

	var config = boringConfig(__dirname + '/config.cson')

Simple.