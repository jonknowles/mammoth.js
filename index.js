const { convert } = require('./lib/index.js');
const fs = require('fs');

const INPUT_PATH = 'test.docx';
const OUTPUT_PATH = 'result.json';

convert({path: INPUT_PATH})
  .then(({value = {}}) => {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(value.children, null, 2));

  });
