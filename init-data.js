const fetch = require('node-fetch');
const { insert } = require("./db");


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

  const scontrini = Math.round(Math.random() * 50);
  for (let k = 0; k < scontrini; k++) {
    const scontrino = await insert('INSERT INTO scontrino (dataorario) VALUES (?)', [
      randomDate(new Date(2023, 4, 1), new Date)
    ]);
    for (let i = 0; i < scontrini; i++) {
      const prodotto = prodotti.at(Math.floor(Math.random() * prodotti.length))
      const qty = Math.ceil(Math.random() * 15);
      await insert('INSERT INTO riga_scontrino (id_scontrino, descrizione, qty, price) VALUES (?, ?, ?, ?)', [
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