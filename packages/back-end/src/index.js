const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.db = router.db

const rules = auth.rewriter({
  users: 600
})

server.use(middlewares)
server.use(jsonServer.bodyParser)

//server.post('/login', (req, res) => {
  //const { email, password } = req.body
  //const data = email + password
  //const token = new Buffer(data).toString('base64')

  //res.json({ token })
//})

server.use(auth)
server.use(router)

server.listen(5000, () => {
  console.log('JSON Server is running')
})
