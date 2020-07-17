import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import React from 'react'
import Signin from './component'

describe('login page', () => {
  it('deve todos os campos e botões do login', () => {
    const { container, getByPlaceholderText, getByText } = render(<Signin />, { wrapper: MemoryRouter })

    expect(container.innerHTML).toMatch('Login')
    expect(getByPlaceholderText('E-mail')).toBeTruthy()
    expect(getByPlaceholderText('Password')).toBeTruthy()
    expect(getByText('Entrar')).toBeTruthy()
    expect(getByText('Criar conta')).toBeTruthy()
  })
})
