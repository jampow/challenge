import { doLogin } from './signin'

describe('api/signin', () => {
  it('deve retornar erro de e-mail inválido', async () => {
    const resp = await doLogin({
      email: 'emailerrado.com',
      password: '123'
    })

    expect(resp).toEqual(expect.objectContaining({
      error: expect.objectContaining({
        email: '"email" must be a valid email'
      })
    }))
  })
})
