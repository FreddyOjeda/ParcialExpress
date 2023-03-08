
const express = require('express')
const path = require('path')    
const app = express()
const port = 3000


//middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname,'./public')))

app.use('/', require('./routes/index'))

app.listen(port, () => {
  console.log(`Servidor corriendo en  localhost:${port}`)
})