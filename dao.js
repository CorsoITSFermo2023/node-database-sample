const { all, insert } = require("./db")

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

/**
 * 
 * @param {Date} data 
 * @param {number} totale 
 * @param {number} numero_scontrini 
 * @param {number} media 
 */
async function inserisciTotale(data, totale, numero_scontrini, media) {
  return await insert(
    'insert into totale_giorno (data, totale, numero_scontrini, media) values (?,?,?,?)',
    [data, totale, numero_scontrini, media]
  )
}

module.exports = {
  inserisciTotale,
  listaRigheScontrino,
  listaScontrini
}