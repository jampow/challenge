
module.exports = {
  'Signup success': browser => {
    const signup = browser.page.signup()

    signup.navigate()
      .fillFormWithRandomData()
      .submit()
      .end()
  }
}
