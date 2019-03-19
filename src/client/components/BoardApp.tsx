import { observer } from 'mobx-react'
import * as React from 'react'
import { boardStore, Card, List } from '../stores/BoardStore'

const boardStyle = {
  display: 'flex'
}

const listStyle = {
  border: '1px solid black'
}

export const ListView = observer((list: List) => {
  return <div style={listStyle}>
    <div>{list.cards.map((card) => <CardView {...card} />)}</div>
    <div>{list.listName}</div>

    <input onChange={e => list.changeTitleInput(e.target.value)} value={list.titleInput} />
    <button onClick={() => list.addCard()}>Add Card</button>
  </div>
})

export const BoardApp = observer(() => {
  return <div style={boardStyle}>
    {boardStore.lists.map((list: List) => <ListView {...list} />)}

    <button onClick={boardStore.addList}>Add List</button>
  </div>
})

export const CardView = observer((card: Card) => {
  return <div>
    <span>{card.title}</span>
    <button onClick={() => card.deleteCard()}>x</button>
  </div>
})
