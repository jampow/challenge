import { STATUS } from '../../api/order'

export const sumCashback = orders => orders
  .filter(order => order.status === STATUS.APPROVED)
  .reduce((total, order) => total + order.total, 0)

export const applyCashback = (total, cashback) => {
  if (total >= cashback) {
    return {
      total: total - cashback,
      cashback: 0
    }
  } else {
    return {
      total: 0,
      cashback: cashback - total
    }
  }
}
