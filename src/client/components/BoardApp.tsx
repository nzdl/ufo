import { observer } from 'mobx-react'
import * as React from 'react'
import { boardStore, Card, List } from '../stores/BoardStore'

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

    <div style={listStyle}>
      <button onClick={boardStore.addList}>Add List</button>
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
