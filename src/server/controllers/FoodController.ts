import { Get, JsonController, Post, Req } from 'routing-controllers'
import { Food } from '../model/Food'

const foods = []

@JsonController('/foods')
export class FoodController {

  @Get('/')
  index() {
    return foods
  }

  @Post('/')
  create(@Req() request) {
    const food = new Food()
    food.name = request.body.name
    foods.push(food)
    return food
  }

}
