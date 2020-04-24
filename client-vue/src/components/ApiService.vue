<script>
import axios from 'axios'

const apiUrl = `${process.env.VUE_APP_ACCESS_PROTOCOL}://${process.env.VUE_APP_ACCESS_HOST}:${process.env.VUE_APP_ACCESS_PORT}/api/`

export default {
  all (callback) {
    axios.get(apiUrl)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  },

  add (data, callback) {
    axios.post(apiUrl, {
      desc: data
    })
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  },

  get (id, callback) {
    axios.get(`${apiUrl}${id}`)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  },

  update (data, id, callback) {
    axios.put(`${apiUrl}${id}`, {
      desc: data
    })
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  },

  delete (id, callback) {
    axios.delete(`${apiUrl}${id}`)
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  }
}

</script>
