import {observable} from "mobx";
import axios from "axios";
//import {create} from "domain";


export class BoardStore {

    @observable cards =  [];

    @observable lists = [
        new List(
            "list1",
            []
            ),
    ];

    addList = () => {
        let list = new List(
            "list1",
            [
            ])
        this.lists.push(list)
    }


    fetchLists = async () => {
        const response = await axios.get('/lists')
        this.lists = response.data

    }

    fetchCards = async () => {
        const response = await axios.get('/lists/:id')
        this.lists = response.data

    }

}

async function create({ list }) {
    return await axios.post('/lists', { list })
}

export class List {

    @observable cards: Card[];
    @observable listName : string;
    @observable titleInput = "";

  constructor(listName, cards){
    this.cards = cards
  }

  changeTitleInput = (title) => {
      this.titleInput = title
  };

  addCard = () => {
      let card = new Card("card789", this.titleInput, this)
      this.cards.push(card)
      this.titleInput = "";
    };

  listDeleteCard = (card) => {
      this.cards =  this.cards.filter(c => c !== card)
  }
}

export class Card {
    @observable cardName:string;
    @observable title: string;
    @observable list: List;

  constructor(cardName, title, list){
    this.title = title
      this.list = list
  }


  deleteCard = (card) => {
      this.list.listDeleteCard(card)
  }

  
}

export const boardStore = new BoardStore()
