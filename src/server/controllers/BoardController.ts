import {Delete, Get, JsonController, Post, Req} from 'routing-controllers'
import { Board } from '../model/Board'
// import {BoardStore, Board} from "../../client/stores/BoardStore";

let boards =  []

@JsonController('/boards')
export class BoardController {

    @Get('/')
    index() {
        return boards
    }

    @Post('/')
    createBoard(@Req() request) {
        // boardStore.Add();
        return []
    }

    @Delete('/')
    deleteBoard(@Req() request) {
        // boardStore.Add();
        return []
    }
}
