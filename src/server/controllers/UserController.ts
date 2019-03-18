import { Get, JsonController, Post, Req } from 'routing-controllers'
import { User } from '../model/User'

const users = []

@JsonController('/users')
export class UserController {

  @Get('/')
  index() {
    return users
  }

  @Post('/')
  create(@Req() request) {
    const user = new User()
    user.userName = request.body.name
    users.push(user)
    return user
  }

}
