const fastify = require('fastify')()
const axios = require('axios')
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
})

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs'),
  },
})

fastify.get('/', (req, res) => {
  axios
    .get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then((resp) => {
      res.view('/index.ejs', { data: resp.data })
    })
    .catch(function (error) {
      console.log(error)
    })
})

fastify.listen(3000, (err) => {
  if (err) throw err
  console.log('Go to http://localhost:3000/')
})
