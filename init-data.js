const { formatISO } = require("date-fns");
const { run } = require("./db");

async function start() {
  await run('INSERT INTO scontrino (datetime) VALUES (?)', [
    formatISO(new Date)
  ])
}

start();