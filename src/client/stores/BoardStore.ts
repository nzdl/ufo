import {observable} from "mobx";



export class BoardStore {

    @observable boards = [];

    constructor(boards){
        this.boards = boards;
    }

    Add = () => {
        let board = new Board([]);
        board.boardStore = this;
        this.boards.push(board);
    }

}

export class Board {

  @observable lists = [];
  boardStore: BoardStore;

  constructor(lists){
      this.lists = lists;
  }

    Add = () => {
      let list = new List([]);
      list.board = this;
      this.lists.push(list)
    }

    Delete = (list) => {
        this.lists = this.lists.filter((c) => c !== list)
    }

}


export class List {
    @observable cards = Array<Card>();
    board: Board;

  constructor(cards){
    this.cards = cards
  }

  Add = (card) => {
      card.list = this
      this.cards.push(card)
  }

  DeleteCard = (card) => {
      this.cards = this.cards.filter((c) => c !== card)
  }
}

export class Card {
  title: string;
  constructor(title){
    this.title = title
  }

  list: List

  Delete = () => {
      this.list.DeleteCard(this)
  }
}
