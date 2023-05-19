const { listaScontrini } = require("./dao")
const { listaRigheScontrino } = require("./dao")
const { inserisciTotale } = require("./dao")
const parse = require('date-fns/parse')


async function run() {
  const rows = await listaScontrini()
  console.log(parse(rows[0].datetime))

  let date= []


  for(let i=0;i<rows.length;i++){
    if(!date.includes()) {
        date.push(rows[i].datetime)
    }
  }

  for(let data=0;data<date.length;data++){
    let totale=0
    let qty_scontrini=0
    
    for(let i=0;i<rows.length;i++){
      if(data==rows[i].datetime){
          qty_scontrini++
          const scontrino= await listaRigheScontrino(rows[i].id)
          for(let j=0;j<scontrino.length;j++) totale+= scontrino[i].price * scontrino[i].qty
      }//if
    }//for
    
    const Totale = await inserisciTotale(date[data],totale,qty_scontrini,totale/qty_scontrini)
    console.log(date[data])
  }//for 
}//run

run();