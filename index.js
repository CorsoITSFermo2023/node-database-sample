const { listaScontrini, listaRigheScontrino, inserisciTotale } = require("./dao");

let date= [];
async function run() {
  const rows = await listaScontrini();
  console.log(rows);

  for (let i=0; i<rows.length; i++){
    if (!date.includes(rows[i].datetime)){
      date.push(rows[i].datetime)
    }
  }

  for (let i=0; i<date.length; i++){
    let totale= 0;
    let qty= 0;
    data=i;
    for (let i=0; i<rows.length; i++){
      if(date[data]==rows[i].datetime){
        qty++;
        const scontrino= listaRigheScontrino(rows[i].id);
        totale=+ scontrino.price*scontrino.qty;
        
      }
    }
    stampa= inserisciTotale(date[i], totale, qty, )
  }
}

run();