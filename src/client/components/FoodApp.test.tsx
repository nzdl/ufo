import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { mount } from 'enzyme'
import { Provider } from 'mobx-react'
import * as React from 'react'
import { FoodStore } from '../stores/FoodStore'
import { FoodApp } from './FoodApp'

const mock = new MockAdapter(axios)

beforeEach(mock.reset)
afterAll(mock.restore)

test('FoodApp', async () => {
  const givenHamburger = () => ({ name: 'hamburger' })
  const givenFrenchFries = () => ({ name: 'french fries' })

  mock.onGet('/foods').reply(200, [givenHamburger()])

  const foodStore = new FoodStore()
  expect(foodStore.foods.length).toBe(0)

  const wrapper = mount(
    <Provider foodStore={foodStore}>
      <FoodApp />
    </Provider>
  )

  expect(wrapper).toMatchSnapshot()

  await block()
  expect(foodStore.foods.length).toBe(1)
  expect(foodStore.foods).toContainEqual(givenHamburger())
  expect(wrapper).toMatchSnapshot()

  mock.onPost('/foods', givenFrenchFries()).reply(() => {
    mock.onGet('/foods').reply(200, [givenHamburger(), givenFrenchFries()])
    return [200, givenHamburger()]
  })

  const input = wrapper.find('input')
  input.simulate('focus')
  input.simulate('change', { target: { value: 'french fries'} })

  wrapper.find('button').simulate('click')

  await block()
  expect(foodStore.foods.length).toBe(2)
  expect(foodStore.foods).toContainEqual(givenFrenchFries())
  expect(wrapper).toMatchSnapshot()
})

function block() {
  return new Promise(resolve => setTimeout(resolve, 0))
}
