const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  const { email, password } = req.body
  const data = email + password
  const token = new Buffer(data).toString('base64')

  res.json({ token })
})

server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})