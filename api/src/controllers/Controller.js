import autoBind from 'auto-bind'

class Controller {
  constructor (service) {
    this.service = service
    autoBind(this)
  }

  all (req, res) {
    console.log('all')

    this.service.get().then(result => {
      if (result.error) {
        console.log(result.data)
      }
      res.status(result.status).json(result.data)
    })
  }

  add (req, res) {
    const item = req.body
    console.log('add')

    this.service.add(item).then(result => {
      if (result.error) {
        console.log(result.data)
      }
      res.status(result.status).json(result.data)
    })
  }

  get (req, res) {
    const _id = req.params.id
    console.log('get', _id)

    this.service.get({ _id }).then(result => {
      if (result.error) {
        console.log(result.data)
      }
      res.status(result.status).json(result.data[0])
    })
  }

  update (req, res) {
    const _id = req.params.id
    const desc = req.body.desc
    console.log('update', _id, desc)

    this.service.update(_id, { desc }).then(result => {
      if (result.error) {
        console.log(result.data)
      }
      res.status(result.status).json(result.data)
    })
  }

  delete (req, res) {
    const _id = req.params.id
    console.log('delete', _id)

    this.service.delete(_id).then(result => {
      if (result.error) {
        console.log(result.data)
      }
      res.status(result.status).json(result.data)
    })
  }
}

export default Controller
