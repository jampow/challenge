module.exports = function (text, element = '*') {
  const t = text.toLowerCase()
  return {
    selector: `//${element}[text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '${t}')]]`,
    locateStrategy: 'xpath'
  }
}
