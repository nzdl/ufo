import { Provider } from 'mobx-react'
import * as React from 'react'
import { render } from 'react-dom'
import { FoodApp } from './components/FoodApp'
import { UserApp } from './components/UserApp'
import { foodStore } from './stores/FoodStore'

render(
  <Provider foodStore={foodStore}>
    {/*<FoodApp />*/}
      <UserApp />
  </Provider>,
  document.querySelector('#root'))
