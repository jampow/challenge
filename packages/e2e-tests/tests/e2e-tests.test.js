
module.exports = {
  'Hello world': browser => {
    browser
      .url('https://www.uol.com.br/')
      .saveScreenshot('report/uol.png')
      .end()
  }
}
