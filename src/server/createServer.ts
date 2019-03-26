import 'reflect-metadata'
import express from 'express'
import Bundler from 'parcel-bundler'
import path from 'path'
import { createExpressServer } from 'routing-controllers'
import { FoodController } from './controllers/FoodController'
import { UserController } from './controllers/UserController'
import { IndexController } from './controllers/IndexController'
import { JsonMiddleware } from './middlewares/JsonMiddleware'
import {BoardController} from "./controllers/BoardController";
import {Card} from "./model/Card";

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


let boards = [];
let lists = [{id: 'l1', boardId: 'b1', }];
let cards = [{id: 'c1', listId: 'l1', title: 'card1'}, {id:'c2', listId: 'l1', title: 'card2'}, {id:'c3', listId: 'l2', title: 'card3'}];
