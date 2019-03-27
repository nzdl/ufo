import axiosist from 'axiosist'
import { createServer } from '../createServer'
import { AxiosInstance } from 'axios'

let axios: AxiosInstance

beforeAll(() => {
  const server = createServer()
  axios = axiosist(server)
})

test('create and list boards', async () => {
})
