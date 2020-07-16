const faker = require('faker')

module.exports = {
  url: '/signup',
  elements: {
    inputName: {
      selector: 'input[name="name"]'
    },
    inputNameError: {
      selector: 'input[name="name"]~.invalid-feedback'
    },
    inputCpf: {
      selector: 'input[name="cpf"]'
    },
    inputCpfError: {
      selector: 'input[name="cpf"]~.invalid-feedback'
    },
    inputEmail: {
      selector: 'input[name="email"]'
    },
    inputEmailError: {
      selector: 'input[name="email"]~.invalid-feedback'
    },
    inputPassword: {
      selector: 'input[name="password"]'
    },
    inputPasswordError: {
      selector: 'input[name="password"]~.invalid-feedback'
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
