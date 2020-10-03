#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
	title: pkgJSON.name,
	tagLine: `Get to know Alex`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	color: `#000`,
	bold: true,
	clear: true,
});

console.log(`
#####

Alejandro Rodriguez - Software Engineer

#####
`);
