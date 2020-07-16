import { STATUS } from '../../api/order'

export const sumCashback = orders => {
  const totalEarned = orders
    .filter(order => order.status === STATUS.APPROVED)
    .reduce((total, order) => total + order.creditEarned, 0)

  const totalSpent = orders
    .filter(order => order.status !== STATUS.REPROVED)
    .reduce((total, order) => total + order.creditUsed, 0)

  return totalEarned - totalSpent
}

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
