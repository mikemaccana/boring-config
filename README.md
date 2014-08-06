# Boring Config

[CSON](https://github.com/bevry/cson) is great for config files, with less unnecessary tokens than JSON and more consistency than YAML.

Boring config loads a config file. It's deliberately sync - there's no point loading your app until its config file has been run.


## Example

	var boringConfig = require('bording-config');

	var config = boringConfig(__dirname + '/config.cson')

Simple.