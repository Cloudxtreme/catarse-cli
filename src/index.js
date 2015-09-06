#! /usr/bin/env node --harmony

'use strict';

(() => {
  const builder = require('../src/builder');

  let questionsList = [
    {
      question: 'Write the name of your component file: ',
      action: 'setName'
    }
  ];

  questionsList.map(step => {
    builder.ask(step.question, data => builder.actions[step.action](data));
  });
})();
