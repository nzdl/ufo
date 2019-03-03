import axios from 'axios'
import { observable } from 'mobx'

export class FoodStore {
  @observable foods = []

  async fetchFoods() {
    this.foods = await index()
  }

  async createFood({ name }) {
    await create({ name })
    await this.fetchFoods()
  }
}

async function index() {
  const response = await axios.get('/foods')
  return response.data
}

async function create({ name }) {
  return await axios.post('/foods', { name })
}

export const foodStore = new FoodStore()
