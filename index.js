const { listaScontrini, listaRigheScontrino, inserisciTotale } = require("./dao");
const {format, fromUnixTime}= require("date-fns");

let date= [];
async function run() {
  const rows = await listaScontrini();
  console.log(rows);

  for (let i=0; i<rows.length; i++){
    const dataConvertita= format(fromUnixTime(rows[i].dataorario/1000), "yyyy-MM-dd")
    if (!date.includes(dataConvertita)){
      date.push(dataConvertita)
    }
  }

  for (let i=0; i<date.length; i++){
    let totale=0;
    let qtyScontrini=0;
    let media=0;
    for (let j=0; j<rows.length; j++){
      const dataConvertita= format(fromUnixTime(rows[i].dataorario/1000), "yyyy-MM-dd")
      if(date[i]==dataConvertita){
        qtyScontrini++;
        const scontrino= await listaRigheScontrino(rows[j].id);
        for (let k=0; k<scontrino.length; k++){
        totale=+ scontrino[k].price*scontrino[k].qty;
        media= totale/qtyScontrini;
        }
      }
      const totaleGiornata= await inserisciTotale(date[i], totale, qtyScontrini, media)
      console.log(totaleGiornata)
    }
  }
}

run();