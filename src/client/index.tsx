import { Provider } from 'mobx-react'
import * as React from 'react'
import { render } from 'react-dom'
import { FoodApp } from './components/FoodApp'
import { foodStore } from './stores/FoodStore'

render(
  <Provider foodStore={foodStore}>
    <FoodApp />
  </Provider>,
  document.querySelector('#root'))
