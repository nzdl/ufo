import { Controller, Get } from 'routing-controllers'

@Controller('/')
export class IndexController {

  @Get('/hi')
  hi() {
    return 'hi routing controllers'
  }

}
