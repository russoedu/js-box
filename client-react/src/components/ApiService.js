import axios from 'axios'

class ApiService {
  all (callback) {
    axios.get(`http://localhost:${process.env.REACT_APP_NGINX_PORT}/api/`)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  get (id, callback) {
    axios.get(`http://localhost:${process.env.REACT_APP_NGINX_PORT}/api/${id}`)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  add (data, callback) {
    axios.post(`http://localhost:${process.env.REACT_APP_NGINX_PORT}/api/add/`, {
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
    axios.put(`http://localhost:${process.env.REACT_APP_NGINX_PORT}/api/update/${id}`, {
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
    axios.put(`http://localhost:${process.env.REACT_APP_NGINX_PORT}/api/delete/${id}`)
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
