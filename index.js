const { all } = require("./db");

async function run() {
  const rows = await all('SELECT * FROM scontrino');
  console.log(rows);
}

run();