import {uuid} from "uuid/v1"
import {List} from "./List";

export class Board {
    id;
    userId;
    title: string;

    constructor (id, title) {
        this.id = id;
        this.title = title
    }
}
