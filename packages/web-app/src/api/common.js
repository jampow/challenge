export const simplifyErrorObj = joiErrorObj => {
  return joiErrorObj.details.reduce((acc, err) => ({
    ...acc,
    [err.context.key]: err.message
  }), {})
}