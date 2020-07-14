const config = {
  'pt-BR': {
    style: 'currency',
    currency: 'BRL'
  }
}

const formater = lang => new Intl.NumberFormat(lang, config[lang])

export const currency = (value, lang = 'pt-BR') => {
  const currency = formater(lang)
  if (!value) return currency.format(0)
  return currency.format(value)
}

export const date = timestamp => {
  return new Date(timestamp).toLocaleString()
}
