const { listaScontrini } = require("./dao");
const {listaRigheScontrino} = require("./dao");

async function run() {
  const  rows = await listaScontrini();
  console.log(rows);
  let totale;
  let date=[];

  for(let i=0;i<rows.length;i++){
    console.log(rows[i].datetime)
  }
}

run();