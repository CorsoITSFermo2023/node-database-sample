
const { fromUnixTime, format } = require("date-fns")
const { listaScontrini } = require("./dao")
const { listaRigheScontrino } = require("./dao")
const { inserisciTotale } = require("./dao")
const parse = require('date-fns/parse')


async function run() {
  const rows = await listaScontrini()
  //console.log(parse(rows[0].datetime))

  const date = {

  }

// for(const row of rows)
  for(let i=0;i<rows.length;i++){
    const dataConvertita = format(fromUnixTime(rows[i].dataorario/1000),"yyyy-MM-dd");
    if(!date[dataConvertita]) {
        date[dataConvertita]=[]
    }
    date[dataConvertita].push(rows[i])
  }

  
  for(const data in date){
    let totale=0
    let qty_scontrini=0
    const rows = date[data];
    for(let i=0;i<rows.length;i++){
      qty_scontrini++
      const scontrino= await listaRigheScontrino(rows[i].id)
      for(let j=0;j<scontrino.length;j++) totale+= scontrino[j].price * scontrino[j].qty
    }//for
    const Totale = await inserisciTotale(data,totale,qty_scontrini,totale/qty_scontrini)
    console.log(date[data])
  }//for 
}//run

run();