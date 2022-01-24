const fs = require('fs').promises;

class Contenedor {
  constructor(path) {
    this.path = path
  }
 // {
 // title, price, thumbnail
 // }

 // const array = []
  async save(obj) {
    const txt = await fs.readFile(this.path, 'utf8');
    const data = JSON.parse(txt)
    const ultimo = data[data.length - 1]
    data.push({
      id: ultimo.id + 1,
      ...obj
    })

    await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf8")
    return ultimo + 1
  }

  getById() {

  }
}

module.exports = Contenedor