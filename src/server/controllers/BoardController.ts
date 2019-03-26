import {Delete, Get, JsonController, Post, Req} from 'routing-controllers'
import { Board } from '../model/Board'
import {Card} from "../model/Card";
import {List} from "../model/List";
// import {BoardStore, Board} from "../../client/stores/BoardStore";


let card1 = new Card('c1', 'l1', 'card1')
let card2 = new Card('c2', 'l1', 'card2')
let card3 = new Card('c3', 'l2', 'card3')
let list1 = new List('l1', 'b1', 'list1')
let list2 = new List('l1', 'b1', 'list2')
let board1 = new Board('b1', 'board1')
let cards = [card1, card2, card3];
let lists = [list1, list2];
let boards = [board1];

let l1 = {}


function MappingCardIntoList(lists, cards) {
    return lists.map((list) => {
        return {
            id: list.id,
            boardId: list.boardId,
            title: list.title,
            cards: cards.filter((card) => card.listId === list.id)
        }
    })

}

function MappingListIntoBoard(boards, lists, cards) {
    return boards.map((board) => {
        return {
            id: board.id,
            boardId: board.boardId,
            title: board.title,
            lists: MappingCardIntoList(lists, cards).filter((list) => list.boardId === board.id)
        }
    })

}

let result = {

}

@JsonController('/boards')
export class BoardController {

    @Get('/')
    index() {
        return MappingListIntoBoard(boards, lists, cards)
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
