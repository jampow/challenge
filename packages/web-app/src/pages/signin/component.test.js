import '@testing-library/jest-dom'
import { waitForDomChange, render, fireEvent, screen } from '@testing-library/react'
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

  it('deve exibir mensagens de erro quando os campos estiverem vazios', async () => {
    const errorMessage = field => `"${field}" is not allowed to be empty`
    const emailError = errorMessage('email')
    const passwordError = errorMessage('password')

    const { container, getByText } = render(<Signin />, { wrapper: MemoryRouter })

    fireEvent.click(getByText('Entrar'))

    await waitForDomChange(() => screen.getByText(emailError))

    expect(container.innerHTML).toMatch(emailError)
    expect(container.innerHTML).toMatch(passwordError)
  })

})
