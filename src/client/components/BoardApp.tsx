import * as React from "react";
import { observable, computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import axios from 'axios'
import {BoardStore, Board, List, Card} from "../stores/BoardStore";
import {resolveAny} from "dns";

let handleClick = (parent, child) => {
    parent.Add(child);
}

@observer
class CardView extends React.Component<Card> {
    render() {
        return (
            <div style={cardStyle}>
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
                        <input type = "text" onChange = {e => {this.cardName = e.target.value}} value = {this.cardName}/>
                        <button onClick = {() => {handleClick(this.props, new Card(this.cardName)); this.cardName = ''}}>
                            Add Card
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

@observer
class BoardView extends React.Component<Board> {
                render(): React.ReactNode {
                    return (
                        <div style={boardStyle}>
                            {this.props.lists.map((list: List) => <ListView {...list} />)}
                            <div style={listStyle}>
                                <button onClick = {this.props.Add} >Add List</button>
                            </div>
                        </div>
                    )
                }
}





let boardStore = new BoardStore([]);

@observer
export class BoardApp extends React.Component {
    render() : React.ReactNode {
        return (
            <div>
                {boardStore.boards.map((board: Board) => <BoardView {...board} />)}
                <div style={listStyle}>
                    <button onClick = {boardStore.Add} >Add Board</button>
                </div>
            </div>
        )
    }
}

const boardStyle = {
    padding: 10,
    display: 'flex',
    border: '1px solid lightgray'
}

const listStyle = {
    margin: 10,
    padding: 14,
    border: '1px solid lightgray'
}

const cardStyle = {
    margin: '10px 0',
}

