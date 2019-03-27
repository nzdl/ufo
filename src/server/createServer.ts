import 'reflect-metadata'
import express from 'express'
import Bundler from 'parcel-bundler'
import path from 'path'
import { createExpressServer, useContainer as controllersUseContainer } from 'routing-controllers'
import { Container } from 'typedi'
import { createConnection, useContainer as typeormUseContainer } from 'typeorm'
import { FoodController } from './controllers/FoodController'
import { UserController } from './controllers/UserController'
import { BoardController } from './controllers/BoardController'
import { IndexController } from './controllers/IndexController'
import { JsonMiddleware } from './middlewares/JsonMiddleware'
import { Food } from './model/Food'

typeormUseContainer(Container)
controllersUseContainer(Container)

export async function connectToDatabase() {
  return await createConnection({
    type: 'sqlite',
    database: ':memory:',
    entities: [Food],
    synchronize: true
  })
}

export function createServer() {
  const app = createExpressServer({
    controllers: [IndexController, FoodController, UserController, BoardController],
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

