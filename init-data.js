const fetch = require('node-fetch');
const { run } = require("./db");


function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


async function fillData() {
  const prodotti = [];
  await fetch('https://fakestoreapi.com/products?limit=150')
    .then(res => res.json())
    .then(curr => prodotti.push(...curr));
  await fetch('https://dummyjson.com/products/category/groceries')
    .then(res => res.json())
    .then(curr => prodotti.push(...curr.products));

  await run('INSERT INTO scontrino (dataorario) VALUES (?)', [
    randomDate(new Date(2023, 4, 1), new Date)
  ]);
  const scontrini = Math.round(Math.random() * 50);
  for (let k = 0; k < scontrini; k++) {
    const scontrino = await run('INSERT INTO scontrino (dataorario) VALUES (?)', [
      randomDate(new Date(2023, 4, 1), new Date)
    ]);
    for (let i = 0; i < scontrini; i++) {
      const prodotto = prodotti.at(Math.floor(Math.random() * prodotti.length))
      const qty = Math.ceil(Math.random() * 15);
      await run('INSERT INTO riga_scontrino (id_scontrino, descrizione, qty, price) VALUES (?, ?, ?, ?)', [
        scontrino,
        prodotto.title,
        qty,
        prodotto.price,
      ]);
    }
  }

}

module.exports = {
  fillData
}