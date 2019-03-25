import {uuid} from "uuid/v1"

export class Card {
    id;
    listId;
    title: string;

    Delete = () => {
        this.listId.DeleteCard(this.id)
    }
}
