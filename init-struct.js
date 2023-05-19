const { run } = require("./db");

async function initStruct() {
  await run('CREATE TABLE IF NOT EXISTS scontrino (id INTEGER PRIMARY KEY AUTOINCREMENT, dataorario STRING)');
  await run('CREATE TABLE IF NOT EXISTS riga_scontrino (id_scontrino INTEGER, descrizione TEXT, price REAL, qty INTEGER)');
  await run('CREATE TABLE IF NOT EXISTS totale_giorno (data string KEY, totale REAL, numero_scontrini INTEGER, media REAL)');
}

module.exports = {
  initStruct
}