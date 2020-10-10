module.exports = {
  '@tags': ['order'],
  'create simple order': browser => {
    const signin = browser.page.signin()
    const dashboard = browser.page.dashboard()
    const order = browser.page.order()

    signin
      .navigate()
      .loginAsTestUser()
      .expect.url().to.contain('/dashboard')

    order
      .navigate()
      .setValue('@inputSearch', 'deso')
      .selectItem(2)
      .pause(100)
      .click('@saveOrderBtn')
  }
}
