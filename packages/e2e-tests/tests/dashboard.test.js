module.exports = {
  '@tags': ['dashboard'],
  'dashboard signout': browser => {
    const signin = browser.page.signin()
    const dashboard = browser.page.dashboard()

    const menu = dashboard.section.menu

    signin
      .navigate()
      .loginAsTestUser()
      .expect.url().to.contain('/dashboard')

    menu
      .click('@signoutLink')
      .expect.url().to.equal('http://localhost:3000/')
  },

  'dashboard go to order': browser => {
    const signin = browser.page.signin()
    const dashboard = browser.page.dashboard()

    signin
      .navigate()
      .loginAsTestUser()
      .expect.url().to.contain('/dashboard')

    dashboard
      .click('@btnCreateOrder')
      .expect.url().to.contain('/create-order')

  }
}
