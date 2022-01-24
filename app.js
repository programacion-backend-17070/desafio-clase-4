const Contenedor = require('./contenedor')

const instancia = new Contenedor("./data.json")

async function hola () {
  await instancia.save({ title: "play 5", price: 15000, thumbnail: ""})
  await instancia.save({ title: "play 6", price: 15000, thumbnail: ""})
  await instancia.save({ title: "play 7", price: 15000, thumbnail: ""})
}

hola()
