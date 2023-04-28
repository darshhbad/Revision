//Using the node module system and created routes

const http = require('http');
const routes = require('./node class 9 routes')


const server = http.createServer(routes);

server.listen(3000);
