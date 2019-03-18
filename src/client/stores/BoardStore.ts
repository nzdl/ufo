import {observable} from "mobx";

export class BoardStore {

  @observable lists = [
      new List([
          new Card("title"),
          new Card("title"),
          new Card("title"),
      ]),
      new List([
          new Card("title"),
          new Card("title"),
          new Card("title"),
      ]),
      new List([
          new Card("title"),
          new Card("title"),
          new Card("title"),
      ])
  ];

}


export class List {
  cards: Card[];

  constructor(cards){
    this.cards = cards
  }

}

export class Card {
  title: string;
  constructor(title){
    this.title = title
  }
}
