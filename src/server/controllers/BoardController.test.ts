import axiosist from 'axiosist'
import { createServer } from '../createServer'
import { AxiosInstance } from 'axios'

let axios: AxiosInstance

beforeAll(() => {
    const server = createServer()
    axios = axiosist(server)
})

test('get boards', async () => {
    let response = await axios.get('/boards')

    expect(response.status).toBe(200)
    expect(response.data).toEqual( {"boards": []})
})
