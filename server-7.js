const mod1=require('./modules/module-1')
const mod2=require('./modules/module2')
const mod3=require('./modules/module3')
const mod4=require('./modules/module4')
const mod5=require('./modules/module5')

const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/fsd') {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(mod1.display());
  }
  else if(req.url === '/lahore'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(mod2.display());
  }
  else if(req.url === '/bad_request'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
  }
 // res.end('I am your server');
});

const port = 3005;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



