const amp=require('./modules/my_module');

const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/success') {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(amp.sendit());
  }
  else if(req.url === '/Not_Found'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success - NO');
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



