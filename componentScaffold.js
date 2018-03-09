#! /usr/bin/env node
var shell = require("shelljs");

const [, , scaffoldType, jsxName, scssName] = process.argv;

const { component, container } = require("./helpers.js");

const createBoilerPlate = {
  component,
  container
};

createBoilerPlate[scaffoldType](jsxName, scssName);

shell.echo(`${jsxName} ${scaffoldType} created!`);
