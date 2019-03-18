import * as React from "react";
import { observable, computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import axios from 'axios'
import {BoardStore, Card, List} from "../stores/BoardStore";


let boardStyle = {
    display : "flex",
}

let listStyle = {
    border: "1px solid black"
}



let ListView = (list) => {
    return (
        <div>
            <div style={listStyle}>
                <div>
                    {list.cards.map((card) => <p>{card.title}</p>)}
                </div>
                <div style={boardStyle}>
                    <button onClick={()=>{console.log(list); list.cards.push(new Card('123')); console.log(list)}}>
                        Add Card
                    </button>
                </div>
            </div>
        </div>
    )
}


export let BoardApp = () => {
    @observable
    let boardStore = new BoardStore();

    return (
        <div style={boardStyle}>
            {boardStore.lists.map((list: List) => <ListView {...list} />)}
            <div style={listStyle}>
                <button>Add List</button>
            </div>
        </div>
    )
}

BoardApp = observer(BoardApp)
