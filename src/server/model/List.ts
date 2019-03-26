import {uuid} from "uuid/v1"
import {Card} from "./Card";

export class List {
    id;
    boardId;
    title: string;

    constructor (id, boardId, title) {
        this.id = id;
        this.boardId = boardId;
        this.title = title
    }
}
