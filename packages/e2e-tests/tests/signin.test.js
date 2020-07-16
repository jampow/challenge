module.exports = {
  '@tags': ['signin'],
  'Signin success': browser => {
    const signin = browser.page.signin()

    signin.navigate()
      .setValue('@inputEmail', 'test@test.com')
      .setValue('@inputPassword', 'test123')
      .click('@btnSubmit')
      .expect.url().to.contain('/dashboard')
  },

  'Signin link to signup': browser => {
    const signin = browser.page.signin()
    const signup = browser.page.signup()

    signin.navigate()
      .click('@btnCreateAccount')
      .expect.url().to.contain('/signup')

    signup
      .click('@btnBack')
      .expect.url().to.equal('http://localhost:3000/')
  }
}
