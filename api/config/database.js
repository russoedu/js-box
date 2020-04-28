import mongoose from 'mongoose'

class Connection {
  constructor () {
    const url = `mongodb://${process.env.JS_BOX_MONGO_USERNAME}:${process.env.JS_BOX_MONGO_PASSWORD}@mongodb/js-box?authSource=admin`
    const config = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
    mongoose.Promise = global.Promise
    mongoose.connect(url, config)
      .then(() => {
        console.log('Establish new connection with Mongo DB')
      })
      .catch(e => {
        console.log('Error stablishing connection to Mongo DB')
        console.log(e)
      })
  }
}

export default new Connection()
