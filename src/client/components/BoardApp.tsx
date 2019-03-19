import * as React from "react";
import { observable, computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import axios from 'axios'
import {BoardStore, Card, List} from "../stores/BoardStore";
import {resolveAny} from "dns";


let boardStyle = {
    display : "flex",
}

let listStyle = {
    border: "1px solid black"
}

let handleClick = (parent, child) => {
    parent.Add(child);
}

@observer
class CardView extends React.Component<Card> {
    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <button onClick = {this.props.Delete}>X</button>
            </div>
        );
    }
}

@observer
class ListView extends React.Component<List> {
    @observable cardName = '';

    render() {

        return (
            <div>
                <div style={listStyle}>
                    <div>
                        {this.props.cards.map((card) => <CardView {...card}/>)}
                    </div>
                    <div style={boardStyle}>
                        <input type="text" onChange={
                            e => {
                                console.log(e.target.value);
                                this.cardName = e.target.value
                        }}
                               value={this.cardName}/>
                        <button onClick={() => {
                            handleClick(this.props, new Card(this.cardName));
                            this.cardName = ''
                        }}>
                            Add Card
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


let boardStore = new BoardStore();

let createNewCard = (name) => {

}

let createNewList = (name) => {
    new List(name)
}

@observer
export class BoardApp extends React.Component {
    render() {

        return (
            <div style={boardStyle}>
                {boardStore.lists.map((list: List) => <ListView {...list} />)}
                <div style={listStyle}>
                    <input type="text" onChange = {e => new Card(e.target.value)} />
                    <button onClick = {() => {}} >Add List</button>
                </div>
            </div>
        )
    }
}

