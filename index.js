const { listaScontrini, listaRigheScontrino, inserisciTotale } = require("./dao")
const { all, insert  } = require("./db");

async function run() {
  const rows = await all('SELECT * FROM scontrini');
  console.log(rows);

}


run();
