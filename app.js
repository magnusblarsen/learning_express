const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log(req.method);
    //console.log(req.url);
    const url = req.url;
    if(url === '/'){ //home page
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home Page</h1>');
        res.end();
    } else if(url === '/about'){ //about page
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>');
        res.end();
    } else{ //404
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>NOT FOUND!...</h1>');
        res.end();
    }
    
    
})

server.listen(5000)
