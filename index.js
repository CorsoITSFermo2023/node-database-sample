const { listaScontrini } = require("./dao");

async function run() {
  const rows = await listaScontrini();
  console.log(rows);
}

run();