export const simplifyErrorObj = joiErrorObj => {
  return joiErrorObj.details.reduce((acc, err) => ({
    ...acc,
    [err.context.key]: err.message
  }), {})
}

export const getToken = () => lsGet('token')
export const setToken = (token) => lsSet('token', token)

const lsGet = (key) => {
  let value

  try {
    value = window.localStorage.getItem(key)
  } catch(err) {
    console.error('Local Storage is not accesible', err)
    return null
  }

  return value
}

const lsSet = (key, value) => {

  try {
    window.localStorage.setItem(key, value)
  } catch(err) {
    console.error('Local Storage is not accesible', err)
    return null
  }

  return true
}