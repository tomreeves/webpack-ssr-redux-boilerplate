import fetch from 'node-fetch'

export default class ProductMapper {
  constructor(path) {
    this.endpoint = 'https://jsonplaceholder.typicode.com/todos/1'
  }

  async getFetch() {
    return fetch(this.endpoint)
      .then((res) => res.json())
      .catch((err) => console.error(err))
  }

  async send() {
    return this.getFetch()
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  }
}
