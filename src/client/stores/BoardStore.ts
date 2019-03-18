import {observable} from "mobx";

export class BoardStore {

  @observable lists = [
      new List([
          new Card("title1"),
          new Card("title2"),
          new Card("title3"),
      ]),
      new List([
          new Card("title4"),
          new Card("title5"),
          new Card("title6"),
      ]),
      new List([
          new Card("title7"),
          new Card("title8"),
          new Card("title9"),
      ])
  ];

}


export class List {
    @observable cards = Array<Card>();

  constructor(cards){
    this.cards = cards
  }

  AddCard(){
      this.cards.push(new Card('new'))
      alert('CARDS')
    }
}

export class Card {
  title: string;
  constructor(title){
    this.title = title
  }
}
