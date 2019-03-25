import { Get, JsonController, Post, Req } from 'routing-controllers'
import { Food } from '../model/Food'
import {BoardStore, Board} from "../../client/stores/BoardStore";

const boardStore = new BoardStore([])

@JsonController('/boards')
export class BoardController {

    @Get('/')
    index() {
        return boardStore.boards
    }

    @Post('/')
    create(@Req() request) {
        boardStore.Add();
        return []
    }

}
