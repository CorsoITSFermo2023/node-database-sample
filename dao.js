const { all } = require("./db")

/**
 * 
 * @returns {Array<{id: number, datetime: string}>}
 */
async function listaScontrini() {
  return await all('SELECT * FROM scontrino');
}

/**
 * 
 * @param {number} id_scontrino 
 * @returns {Array<{id: number, id_scontrino: number, descrizione: string, price: number, qty: number}>}
 */
async function listaRigheScontrino(id_scontrino) {
  return await all('SELECT * FROM riga_scontrino WHERE id_scontrino = ?', [id_scontrino]);
}

module.exports = {

}