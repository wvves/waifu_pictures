export default class Api {

  static async get(url, options) {
      const response = await fetch(url, {
          method: 'GET',
          ...options
      })
      return response.json()
  }
}