import * as React from "react";
import { observable, computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import axios from 'axios'
import {boardStore, List} from "../stores/BoardStore";

let boardStyle = {
    display : "flex",
};
let listStyle = {
    border: "1px solid black"
};
let addListStyle = {
    height: "30px",
    display: "flex",
};


export let ListView = observer((list) => {

    return <div style={listStyle}>
        <div>{list.cards.map((card) => <CardView {...card} />)}</div>
        <div>{list.listName}</div>

        <input onChange={e => list.changeTitleInput(e.target.value) } value={list.titleInput}/>
        <button onClick={e => list.addCard(list.titleInput)}>Add Card</button>
    </div>
})

export let BoardApp = observer (() => {
     return <div style={boardStyle}>
         {boardStore.lists.map(
             (list: List) => <ListView {...list} />
         )}
         <input style={addListStyle}/>
         <button style={addListStyle} onClick={boardStore.addList}>Add List</button>
     </div>

 })

export let CardView = observer((card) => {
    return <div>
        <span>{card.title}</span>
        <button onClick={e => card.deleteCard()}>x</button>
    </div>
})
