const findByText = require('../helpers/findByText')
const menu = require('./sections/menu')

module.exports = {
  url: '/create-order',
  elements: {
    btnCreateOrder: 'a[href="/create-order"]',
    inputSearch: 'input.rbt-input-main',
    searchOptions: '.rbt-menu.dropdown-menu.show',
    saveOrderBtn: findByText('Fazer pedido')
  },
  commands: [{
    selectItem: function(n = 1) {
      return this.click(`.rbt-menu.dropdown-menu.show a:nth-child(${n})`)
    }
  }],
  sections: {
    menu: menu
  }
}
