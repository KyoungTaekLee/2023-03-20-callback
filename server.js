import http from 'http';
console.dir(http);
const server= http.createServer(function(request,response){
  
  let body = "";
  body += "<!"

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello world');
});