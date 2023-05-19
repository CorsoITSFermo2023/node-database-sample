const { initStruct } = require('./init-struct');
const { fillData } = require('./init-data');

async function start() {
  await initStruct(),
  await fillData()
}

start();