import {Get, JsonController, Param, Post, Req} from 'routing-controllers'

const Board = []
const List = []
const Card = []

@JsonController('/lists')
export class BoardController {

  @Get('/')
  index() {
    return List
  }

    @Get('/:id')
    getOneList(@Param("id") id: number) {
        return List[id];
    }


  //
  // @Post('/')
  // create(@Req() request) {
  //   const board = new Board()
  //   board.list = request.body.
  //   users.push(user)
  //   return user
  // }

}
