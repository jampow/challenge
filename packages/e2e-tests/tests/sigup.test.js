
module.exports = {
  'Signup success': browser => {
    const signup = browser.page.signup()

    signup.navigate()
      .setValue('@inputName', 'Test')
      .setValue('@inputCpf', '01234567890')
      .setValue('@inputEmail', 'test@test.com')
      .setValue('@inputPassword', '123456')
      .click('@btnSubmit')
      .end()
  }
}
