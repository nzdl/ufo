import {observable} from "mobx";

export class BoardStore {

  @observable lists = [];

  Add = () => {
      this.lists.push(new List([]))
  }

}


export class List {
    @observable cards = Array<Card>();

  constructor(cards){
    this.cards = cards
  }

  Add = (card) => {
      card.list = this
      this.cards.push(card)
  }

  Delete = (card) => {
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
      this.list.Delete(this)
  }
}
