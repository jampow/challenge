export const calculateCashback = val => {
  const rules = [
    [0, 0.1],
    [1000, 0.15],
    [1500, 0.2]
  ]

  // mock do retorno da requisição
  const resp = rules.reduce((acc, [trigger, perc]) => {
    if (val >= trigger) {
      return {
        perc,
        value: ((val * 100) * perc) / 100
      }
    }
    return acc
  }, {})

  
  // mock da requisição
  return Promise.resolve(resp)
}
