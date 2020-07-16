
module.exports = {
  'Signup success': browser => {
    const signup = browser.page.signup()

    signup.navigate()
      .fillFormWithRandomData()
      .submit()
      .end()
  },

  'Signup invalid cpf': browser => {
    const signup = browser.page.signup()

    signup.navigate()
      .fillFormWithRandomData()
      .setValue('@inputCpf', '123')
      .submit()
      .expect.element('@inputCpfError').text.to.equal('CPF inválido')
  },

  'Signup test required fields': browser => {
    const signup = browser.page.signup()

    signup.navigate()
      .submit()

    signup.expect.element('@inputNameError').text.to.equal('"name" is not allowed to be empty')
    signup.expect.element('@inputCpfError').text.to.equal('"cpf" is not allowed to be empty')
    signup.expect.element('@inputEmailError').text.to.equal('"email" is not allowed to be empty')
    signup.expect.element('@inputPasswordError').text.to.equal('"password" is not allowed to be empty')
  },

  'Signup invalid email': browser => {
    const signup = browser.page.signup()

    signup.navigate()
      .setValue('@inputEmail', '123')
      .submit()
      .expect.element('@inputEmailError').text.to.equal('"email" must be a valid email')
  }
}
