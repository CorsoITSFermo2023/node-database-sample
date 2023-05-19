const { id } = require("date-fns/locale");
const { listaScontrini } = require("./dao");
const { inserisciTotale } = require("./dao");
const {  listaRigheScontrino } = require("./dao") ;

async function run() {
  const rows = await listaScontrini();
  for(let i = 0;i<rows.lenght; i++)  {
    const scontrino = rows[i]
    const promessaRighe = listaRigheScontrino(scontrino.id)
    const righe = await promessaRighe;
  }
  console.log(rows);
}

function calcolagiornata() {
  somma = 0;
  
  

     

  
  }



}
run();