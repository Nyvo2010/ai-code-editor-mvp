const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
  if(req.url === '/api/hello'){
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({message:'AI Code Editor MVP backend running'}));
  } else {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('AI Code Editor MVP');
  }
});
server.listen(PORT, ()=> console.log('listening', PORT));
