import {uuid} from "uuid/v1"
import {List} from "./List";

export class Board {
    id;
    userId;
    title: string;
    lists: List[];
}
