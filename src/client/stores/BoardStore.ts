import { observable } from "mobx"

export class BoardStore {
  @observable cards = []
  @observable lists = []

  addList = () => {
    let list = new List("list1", [])
    this.lists.push(list)
  }
}

export class List {
  @observable cards: Card[]
  @observable listName: string
  @observable titleInput = ""

  constructor(listName, cards) {
    this.cards = cards
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
