import * as React from "react";
import { observable, computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import axios from 'axios'
import {BoardStore, List} from "../stores/BoardStore";


let boardStyle = {
    display : "flex",
}

let listStyle = {
    border: "1px solid black"
}

let boardStore = new BoardStore();

function ListView(list) {
    return <div style={listStyle}>
        <div>{list.cards.map(
            (card) => <p>{card.title}</p>)}</div>
    </div>
}

 export let BoardApp = () => {
     return <div style={boardStyle}>
         {boardStore.lists.map((list: List) => <ListView {...list} />)}
     </div>
 }