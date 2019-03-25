import {uuid} from "uuid/v1"
import {Card} from "./Card";

export class List {
    id;
    boardId;
    title: string;
    cards: Card[];

    constructor(cards){
        this.cards = cards
    }

    Add = () => {
        let card = new Card()
        card.listId = this.id
        this.cards.push(card)
    }

    DeleteCard = (cardId) => {
        this.cards = this.cards.filter((c) => c.id !== cardId)
    }
}
