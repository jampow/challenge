module.exports = {
  url: 'http://localhost:3000/signup',
  elements: {
    inputName: {
      selector: '/html/body/div[1]/div/div/div/form/div[1]/div[1]/div/input',
      locateStrategy: 'xpath'
    },
    inputCpf: {
      selector: '/html/body/div[1]/div/div/div/form/div[1]/div[2]/div/input',
      locateStrategy: 'xpath'
    },
    inputEmail: {
      selector: '/html/body/div[1]/div/div/div/form/div[2]/div[1]/div/input',
      locateStrategy: 'xpath'
    },
    inputPassword: {
      selector: '/html/body/div[1]/div/div/div/form/div[2]/div[2]/div/input',
      locateStrategy: 'xpath'
    },
    btnSubmit: {
      selector: '/html/body/div[1]/div/div/div/form/div[3]/div[1]/div/button',
      locateStrategy: 'xpath'
    },
    btnBack: {
      selector: '/html/body/div[1]/div/div/div/form/div[3]/div[2]/div/a',
      locateStrategy: 'xpath'
    }
  }
}