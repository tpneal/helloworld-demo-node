const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`
          ##         .
    ## ## ##        ==
 ## ## ## ## ##    ===
/""""""""""""""""\\___/ ===
{                       /  ===-
\\______ O           __/
 \\    \\         __/
  \\____\\_______/


Hello from Tom in Docker image on Friday 4/12 @ 4:14pm
`);
  res.end();
});

server.listen(8080, () => {
  console.log('Server started!');
});
