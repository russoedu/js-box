import mongoose from 'mongoose'
import autoBind from 'auto-bind'

class Service {
  constructor (model) {
    this.model = model
    autoBind(this)
  }

  async get (query = {}) {
    let { skip, limit } = query

    skip = skip ? Number(skip) : 0
    limit = limit ? Number(limit) : 10

    delete query.skip
    delete query.limit

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id)
      } catch (errors) {
        return {
          error: true,
          status: 500,
          data: errors,
          total: 0
        }
      }
    }

    try {
      const items = await this.model
        .find(query)
        .skip(skip)
        .limit(limit)
      const total = await this.model.countDocuments()

      return {
        error: false,
        status: 200,
        data: items,
        total
      }
    } catch (errors) {
      return {
        error: true,
        status: 500,
        data: errors,
        total: 0
      }
    }
  }

  async add (data) {
    try {
      const item = await this.model.create(data)
      if (item) {
        return {
          error: false,
          status: 201,
          data: item
        }
      }
    } catch (errors) {
      return {
        error: true,
        status: 500,
        data: errors
      }
    }
  }

  async update (id, data) {
    try {
      const item = await this.model.findByIdAndUpdate(id, data, { new: true })
      if (!item) {
        return {
          error: true,
          status: 404,
          data: 'item not found'
        }
      }
      return {
        error: false,
        status: 202,
        data: item
      }
    } catch (errors) {
      return {
        error: true,
        status: 500,
        data: errors
      }
    }
  }

  async delete (id) {
    try {
      const item = await this.model.findByIdAndDelete(id)
      if (!item) {
        return {
          error: true,
          status: 404,
          data: 'item not found'
        }
      }
      return {
        error: false,
        deleted: true,
        status: 202,
        data: item
      }
    } catch (errors) {
      return {
        error: true,
        status: 500,
        data: errors
      }
    }
  }
}

export default Service

