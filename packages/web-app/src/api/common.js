import jwtDecode from 'jwt-decode'

export const simplifyErrorObj = joiErrorObj => {
  return joiErrorObj.details.reduce((acc, err) => ({
    ...acc,
    [err.context.key]: err.message
  }), {})
}


export const getAuth = () => lsGet('auth')
export const getToken = () => lsGet('token')
export const setToken = (token) => {
  lsSet('token', token)
  lsSet('auth', jwtDecode(token))
}

export const delToken = () => {
  lsDel('token')
  lsDel('auth')
}

const lsDel = (key) => {
  try {
    window.localStorage.removeItem(key)
  } catch(err) {
    console.error('Local Storage is not accesible', err)
    return null
  }

  return true
}

const lsGet = (key) => {
  let value

  try {
    const storagedValue = window.localStorage.getItem(key)
    value = JSON.parse(storagedValue)
  } catch(err) {
    console.error('Local Storage is not accesible', err)
    return null
  }

  return value
}

const lsSet = (key, value) => {

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch(err) {
    console.error('Local Storage is not accesible', err)
    return null
  }

  return true
}
