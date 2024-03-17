import request from 'supertest'
import app from './app'

describe('GET /', () => {
  test('should return Hello from express!', async () => {
    return request(app).get('/').expect('Content-Type', /json/).expect(200)
  })
})
