 require('dotenv').config()
 const app = require('./app')
 const server = require('http').Server(app)
 const PORT  = process.env.PORT
 server.listen(PORT,()=>console.log(`server running is port ${PORT}`))