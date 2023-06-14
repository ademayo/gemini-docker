const { readFileSync } = require('fs')
const gemini = require('gemini-server').default

const app = gemini({
  cert: readFileSync('./certs/cert.pem'),
  key: readFileSync('./certs/key.pem'),
})

app.on('/', (request, response) => {
  response.file('./pages/index.gmi')
})

app.listen(1965)