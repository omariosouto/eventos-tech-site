const myIp = require('quick-local-ip')
const app = require('./config/express')
const port = process.env.npm_package_config_port

app.listen(port, () => {
  console.log(`Servidor de pé em http://${myIp.getLocalIP4()}:${port}`)
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra desligar o servidor: ctrl + c') 
})