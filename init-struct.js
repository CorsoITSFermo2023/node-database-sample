const { db } = require("./db");

async function run() {
  db.run('CREATE TABLE scontrino (id INTEGER PRIMARY KEY AUTOINCREMENT, datetime STRING)');
  db.run('CREATE TABLE riga_scontrino (id INTEGER PRIMARY KEY AUTOINCREMENT, id_scontrino INTEGER, descrizione TEXT, price REAL, qty INTEGER)');
}

run();