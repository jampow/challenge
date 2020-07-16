
module.exports = {
  'Signin success': browser => {
    const signin = browser.page.signin()

    signin.navigate()
      .setValue('@inputEmail', 'test@test.com')
      .setValue('@inputPassword', 'test123')
      .click('@btnSubmit')
      .expect.url().to.contain('/dashboard')
  }
}
