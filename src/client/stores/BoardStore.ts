import { observable } from "mobx"

export class BoardStore {
  @observable cards = []
  @observable lists = []
  @observable boards = []

  // addList = () => {
  //   let list = new List("list1", [], this)
  //   this.lists.push(list)
  // }

  addBoard = () => {
    let board = new Board("board1",[],[])
      this.boards.push(board)
  }

  deleteBoard = () => {

  }
}

export class Board {
  @observable boardName: string
  @observable lists: List[]
  @observable card: Card[]

    constructor(boardName, lists, cards) {
        this.boardName = boardName
        this.lists = lists
        this.card = cards
    }

    addList = () => {
        let list = new List("listname", [], this)
        this.lists.push(list)
    }

    boardDeleteList = () => {

  }
}


export class List {
  @observable cards: Card[]
  @observable listName: string
  @observable titleInput = ""
  @observable board:Board[]

  constructor(listName, cards, board) {
      this.cards = cards
      this.board = board
  }

  changeTitleInput = (title) => {
    this.titleInput = title
  }

  addCard = () => {
    let card = new Card("card789", this.titleInput, this)
    this.cards.push(card)
    this.titleInput = ""
  };

  listDeleteCard = (card) => {
    this.cards = this.cards.filter(c => c !== card)
  }
}

export class Card {
  @observable cardName: string;
  @observable title: string;
  @observable list: List;

  constructor(cardName, title, list) {
    this.title = title
    this.list = list
  }

  deleteCard = () => {
    this.list.listDeleteCard(this)
  }
}

export const boardStore = new BoardStore()
