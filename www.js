
const http = require('http');
const app = require('./server');
const gconf = require('gconf/default');


const ip = gconf.get('server.ip') || '';
const port = gconf.get('server.port') || '';

http.createServer(app).listen(port, ip, () =>{
  console.log(process.pid, 'Listening in port', port);
});