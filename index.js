const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'html5up-dimension')))
  .get('/*', function(_, res) { res.redirect('/') })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
