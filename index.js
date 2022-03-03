const http = require('http');

const requestListener = (req,res) => {
  const {method, url, headers} = req;
  const {pathname, searchParams} = new URL(url, `http://${headers.host}`)
  console.log(url)
  console.log(pathname)
  res.writeHead(200)
  res.end('<h1>hello world</h1>')
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
