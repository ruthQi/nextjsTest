const Koa2 = require('koa');
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
   const server = new express();
   //只能用id,服务端获取不到title,只能获取到id
   server.get('/post/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id } 
      app.render(req, res, actualPage, queryParams)
   })

   //fetch
   server.get('/postFetch/:id', (req, res) => {
      const actualPage = '/postFetch'
      const queryParams = { id: req.params.id } 
      app.render(req, res, actualPage, queryParams)
   })

   
   server.get('*', (req, res) => {
      return handle(req, res)
   })

   server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
   })

})
.catch((ex) => {
   console.error(ex.stack)
   process.exit(1)
})
