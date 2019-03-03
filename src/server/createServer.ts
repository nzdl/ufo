import 'reflect-metadata'
import express from 'express'
import Bundler from 'parcel-bundler'
import path from 'path'
import { createExpressServer } from 'routing-controllers'
import { FoodController } from './controllers/FoodController'
import { IndexController } from './controllers/IndexController'
import { JsonMiddleware } from './middlewares/JsonMiddleware'

export function createServer() {
  const app = createExpressServer({
    controllers: [IndexController, FoodController],
    middlewares: [JsonMiddleware]
  })

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../public')))
  }

  if (process.env.NODE_ENV === 'development') {
    const bundler = new Bundler(path.join(__dirname, '../client/index.html'))
    app.use(bundler.middleware())
  }

  return app
}

