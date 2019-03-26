import {uuid} from "uuid/v1"

export class Card {
    id;
    listId;
    title: string;

    constructor (id, listId, title) {
        this.id = id;
        this.listId = listId;
        this.title = title
    }
}
