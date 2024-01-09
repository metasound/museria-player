const hostname = '0.0.0.0';
const port = process.env.PORT || 2790;

const Node = require('./src/node')();
const config = require('./musiphone.config');
const runner = require('./runner');

process.on('uncaughtException', (err) => { 
  console.error(err.stack);
  process.exit(1);
});

runner(config, Node);