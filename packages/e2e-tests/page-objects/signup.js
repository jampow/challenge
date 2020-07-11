const faker = require('faker')

module.exports = {
  url: 'http://localhost:3000/signup',
  elements: {
    inputName: {
      selector: 'input[name="name"]'
    },
    inputCpf: {
      selector: 'input[name="cpf"]'
    },
    inputEmail: {
      selector: 'input[name="email"]'
    },
    inputPassword: {
      selector: 'input[name="password"]'
    },
    btnSubmit: {
      selector: 'button[type="submit"]'
    },
    btnBack: {
      selector: 'a[href="/"]'
    }
  },
  commands: [{
    submit: function() {
      return this.click('@btnSubmit')
    },
    fillFormWithRandomData: function() {
      return this
        .setValue('@inputName', faker.name.findName())
        .setValue('@inputCpf', '01234567890')
        .setValue('@inputEmail', faker.internet.email())
        .setValue('@inputPassword', faker.internet.password())
    }
  }]
}