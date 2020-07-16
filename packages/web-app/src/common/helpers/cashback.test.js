import {
  applyCashback,
  sumCashback
} from './cashback'

const orders = [
  { status: 'approved', creditEarned: 10, creditUsed: 5 },
  { status: 'reproved', creditEarned: 10, creditUsed: 5 },
  { status: 'waiting', creditEarned: 10, creditUsed: 5 },
  { status: 'approved', creditEarned: 10, creditUsed: 0 },
  { status: 'reproved', creditEarned: 10, creditUsed: 0 },
  { status: 'waiting', creditEarned: 10, creditUsed: 0 }
]

describe('cashback tests', () => {
  it('deve somar os cashbacks das orders aprovadas', () => {
    const total = sumCashback(orders)
    expect(total).toEqual(10)
  })

  describe('uso do cashback', () => {
    it('deve retornar um objeto com o quanto de cashback ainda resta e o valor da compra zerado', () => {
      const cashback = 200
      const cartTotal = 150
      const result = applyCashback(cartTotal, cashback)
      expect(result).toEqual(expect.objectContaining({
        total: 0,
        cashback: 50
      }))
    })

    it('deve retornar um objeto com o valor do cashback zerado e o quanto sobrou para pagar', () => {
      const cashback = 200
      const cartTotal = 250
      const result = applyCashback(cartTotal, cashback)
      expect(result).toEqual(expect.objectContaining({
        total: 50,
        cashback: 0
      }))
    })

    it('deve retornar um objeto com o valor do cashback e o total zerados', () => {
      const cashback = 200
      const cartTotal = 200
      const result = applyCashback(cartTotal, cashback)
      expect(result).toEqual(expect.objectContaining({
        total: 0,
        cashback: 0
      }))
    })
  })
})

