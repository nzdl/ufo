import axiosist from 'axiosist'
import { Connection } from 'typeorm'
import { connectToDatabase, createServer } from '../createServer'
import { AxiosInstance } from 'axios'

let axios: AxiosInstance
let connection: Connection

beforeAll(async () => {
  connection = await connectToDatabase()
  const server = createServer()
  axios = axiosist(server)
})

beforeEach(async () => {
  await connection.dropDatabase()
  await connection.synchronize()
})

afterAll(async () => {
  await connection.close()
})

test('create and list foods', async () => {
  let response = await axios.get('/foods')

  expect(response.status).toBe(200)
  expect(response.data).toEqual([])

  response = await axios.post('/foods', { name: 'hamburger' })

  expect(response.status).toBe(200)
  let hamburger = response.data
  expect(hamburger.name).toBe('hamburger')

  response = await axios.get('/foods')
  expect(response.data).toEqual([hamburger])
})
