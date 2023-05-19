const { format, isDate } = require("date-fns");
const { all, insert } = require("./db")

/**
 * 
 * @returns {Promise<Array<{id: number, dataorario: string}>>}
 */
async function listaScontrini() {
  return await all('SELECT * FROM scontrino');
}

/**
 * 
 * @param {number} id_scontrino 
 * @returns {Promise<Array<{id_scontrino: number, descrizione: string, price: number, qty: number}>>}
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
 * @returns {Promise<undefined>} 
 */
async function inserisciTotale(data, totale, numero_scontrini, media) {
  return await insert(
    'insert into totale_giorno (data, totale, numero_scontrini, media) values (?,?,?,?)',
    [
      isDate(data) ? format(data, 'yyyy-MM-dd') : data,
      totale,
      numero_scontrini,
      media]
  )
}

module.exports = {
  inserisciTotale,
  listaRigheScontrino,
  listaScontrini
}