import {uuid} from "uuid/v1"
import {List} from "./List";

export class Board {
    id;
    userId;
    title: string;
    lists: List[];

    constructor(lists){
        this.lists = lists;
    }

    Add = () => {
        let list = new List([]);
        list.boardId = this.id;
        this.lists.push(list)
    }

    Delete = (listId) => {
        this.lists = this.lists.filter((c) => c.id !== listId)
    }
}
