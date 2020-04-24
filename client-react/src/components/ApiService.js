import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_ACCESS_PROTOCOL}://${process.env.REACT_APP_ACCESS_HOST}:${process.env.REACT_APP_ACCESS_PORT}/api/`
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

class ApiService {
  axios = axios.create({
    baseURL: `${process.env.REACT_APP_ACCESS_PROTOCOL}://${process.env.REACT_APP_ACCESS_HOST}:${process.env.REACT_APP_ACCESS_PORT}/api/`,
    timeout: 1000,
    xsrfCookieName: 'XSRF-TOKEN', // default
    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    xsrfHeaderName: 'X-XSRF-TOKEN', // default
  });

  all (callback) {
    this.axios.get()
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  get (id, callback) {
    axios.get(`${baseUrl}${id}`)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  add (data, callback) {
    axios.post(`${baseUrl}`, {
      desc: data
    })
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  }

  update (data, id, callback) {
    axios.put(`${baseUrl}${id}`, {
      desc: data
    })
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  }

  delete (id, callback) {
    axios.delete(`${baseUrl}${id}`)
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  }
}

export default ApiService
