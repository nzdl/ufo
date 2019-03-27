import { Get, JsonController, Post, Req } from 'routing-controllers'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Food } from '../model/Food'

@JsonController('/foods')
export class FoodController {
  @InjectRepository(Food)
  foodRepository: Repository<Food>

  @Get('/')
  async index() {
    return await this.foodRepository.find()
  }

  @Post('/')
  async create(@Req() request) {
    const food = new Food()
    food.name = request.body.name
    return await this.foodRepository.save(food)
  }

}
