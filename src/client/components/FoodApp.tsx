import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { foodStore } from '../stores/FoodStore'

@inject('foodStore')
@observer
export class FoodApp extends React.Component<any> {
  async componentDidMount() {
    await this.props.foodStore.fetchFoods()
  }

  render() {
    return <>
      <Foods foods={this.props.foodStore.foods} />
      <AddFood />
    </>
  }
}

function Foods({ foods }) {
  return <ul>{foods.map(food => <Food key={food.name} {...food} />)}</ul>
}

function Food({ name }) {
  return <li>{name}</li>
}

@inject('foodStore')
@observer
class AddFood extends React.Component<any> {
  @observable name = ''

  render() {
    const handleClick = async () => {
      await this.props.foodStore.createFood({ name: this.name })
      this.name = ''
    }

    return <>
      <input type="text" value={this.name} onChange={e => this.name = e.target.value} />
      <button onClick={handleClick}>Add</button>
    </>
  }
}
