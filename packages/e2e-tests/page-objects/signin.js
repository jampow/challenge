module.exports = {
  url: '/',
  elements: {
    inputEmail: {
      selector: 'input[name="email"]'
    },
    inputPassword: {
      selector: 'input[name="password"]'
    },
    btnSubmit: {
      selector: 'button[type="submit"]'
    },
    btnCreateAccount: {
      selector: 'a[href="/signup"]'
    }
  },
  commands: [{
    loginAsTestUser: function() {
      return this
        .setValue('@inputEmail', 'test@test.com')
        .setValue('@inputPassword', 'test123')
        .click('@btnSubmit')
    }
  }]
}
