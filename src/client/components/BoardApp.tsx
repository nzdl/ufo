import { observer } from 'mobx-react'
import * as React from 'react'
import { boardStore, Card, List, Board } from '../stores/BoardStore'

export const ListView = observer((list: List) => {
  return <div style={listStyle}>
    <div>{list.cards.map((card) => <CardView {...card} />)}</div>
    <div>{list.listName}</div>

    <input onChange={e => list.changeTitleInput(e.target.value)} value={list.titleInput} />
    <button onClick={() => list.addCard()}>Add Card</button>
  </div>
})

export const BoardView = observer((board: Board) => {
    return <div>
        <div style={boardStyle}>
        {board.lists.map((list: List) => <ListView {...list} />)}
            <div style={listStyle}><button onClick={board.addList}>Add List</button></div>
        </div>
        {/*<div><button>Delete Board</button></div>*/}
    </div>
})


export const BoardApp = observer(() => {
  return <div style={containerStyle}>
      <div>
          {boardStore.boards.map((board:Board) => <BoardView {...board}/>)}
      </div>
      <div>
          <button onClick={boardStore.addBoard}>Add Board</button>
      </div>
  </div>
})


export const CardView = observer((card: Card) => {
  return <div style={cardStyle}>
    <span>{card.title}</span>
    <button onClick={() => card.deleteCard()}>x</button>
  </div>
})

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

const containerStyle = {
    margin: '10px 0',
}
