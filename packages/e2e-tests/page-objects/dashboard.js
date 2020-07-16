const menu = require('./sections/menu')

module.exports = {
  url: '/dashboard',
  elements: {
    btnCreateOrder: {
      selector: 'a[href="/create-order"]'
    }
  },
  sections: {
    menu: menu
  }
}
