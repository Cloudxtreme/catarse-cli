'use strict';

const mustache = require('mustache');
const async = require('async');
const fs = require('fs');
const stdin = process.stdin;
const stdout = process.stdout;
let filename;

stdin.setEncoding('utf8');

let ask = (question, callback) => {
  stdin.write(question);
  stdin.on('data', (data) => {
    callback(data.toString().toLowerCase().trim());
  });
};

let actions = {
  setName: name => {
    let template = fs.readFileSync('src/template.js', {encoding: 'utf8'});
    let rendered = mustache.render(template, {name: name});
    
    filename = name.toString().toLowerCase() + '.js';
    
    fs.writeFile(filename, rendered, err => {
      if(err) throw err;
      stdin.write('File Saved');
      process.exit(0);
    });
  }
};

module.exports = {
  ask: ask,
  actions: actions
};