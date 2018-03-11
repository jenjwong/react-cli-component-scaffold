#! /usr/bin/env node
var shell = require("shelljs");

const [, , scaffoldType, jsxName] = process.argv;

const { component, container } = require("./helpers.js");

const createBoilerPlate = {
  component,
  container
};

createBoilerPlate[scaffoldType](jsxName);

shell.echo(`${jsxName} ${scaffoldType} created!`);
